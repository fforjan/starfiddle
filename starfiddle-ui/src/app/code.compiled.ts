export class CodeCompiled {

    constructor(public result: boolean, public wasmCode: ArrayBuffer, public compileMessage?: string, public compileErrors?: string) {}
}
