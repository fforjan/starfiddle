import { Injectable } from '@angular/core';
import { CodeCompiled } from './code.compiled';
import { CodeExecuted } from './code.executed';

@Injectable({
  providedIn: 'root'
})
export class ExecuteService {

  constructor() { }

  async Execute(compiled: CodeCompiled): Promise<CodeExecuted | CodeCompiled> {

    let buffer = '';
    const importObject = {
      imports: {
        console: {
          log: (arg) => {
            buffer += arg.toString() + '\n';
          }
        }
      }
    };

    // The above is equivalent to
    const meta = [
  [ 'Content-Type', 'application/wasm' ]
];

    const init: ResponseInit = { status : 200 , statusText : 'ok!', headers: new Headers(meta)
  };

    try {
    const result = await WebAssembly.instantiateStreaming(new Response(new Blob([compiled.wasmCode]), init), importObject);

    const returnedValue = result.instance.exports.main();
    if (returnedValue !== undefined) {
      buffer += '\n' + returnedValue.toString();
    }
    return new CodeExecuted(buffer);

    } catch (e) {
        compiled.compileErrors =  e.toString();
        return compiled;
    }
  }
}
