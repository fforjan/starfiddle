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

    try {
    const result = await WebAssembly.instantiateStreaming(compiled.asResponse(), importObject);

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
