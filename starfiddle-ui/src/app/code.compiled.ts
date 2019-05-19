export class CodeCompiled {

    constructor(public result: boolean, public wasmCode: Uint8Array, public compileMessage?: string, public compileErrors?: string) {}
}
