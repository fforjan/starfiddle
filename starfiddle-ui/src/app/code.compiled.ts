

const WasmResponseInit: ResponseInit = { status : 200 , statusText : 'ok!', headers: new Headers([
    [ 'Content-Type', 'application/wasm' ]
  ])};

export class CodeCompiled {

    constructor(public result: boolean, public wasmCode: ArrayBuffer, public compileMessage?: string, public compileErrors?: string) {}

    asResponse(): Response {
        return new Response(new Blob([this.wasmCode]), WasmResponseInit);
    }
}
