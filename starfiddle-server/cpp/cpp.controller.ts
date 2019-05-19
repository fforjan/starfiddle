import * as express from 'express';

import SourceCode from '../sourcecode.interface';
import Compilation from '../compilation.interface';
import * as util from 'util';
import * as tmp from 'tmp';
import * as child_process from 'child_process';
import * as fs from 'fs';

class CppController {
  public path = '/cpp';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.post(this.path, this.compileRequest);
  }

  compileRequest = (request: express.Request, response: express.Response) => {
    var sourceCode = <SourceCode>request.body;

    if (sourceCode === null || util.isNullOrUndefined(sourceCode.content)) {
      response.send({ errors: "Empty content, cannot compile" });
    }
    else {
      this.compile(sourceCode.content).then(
        compilation => {
          response.send(compilation);
        }
      )
    }
  }

  async compile(source: string): Promise<Compilation> {
    var sourceFile = tmp.fileSync({ mode: 0o644, prefix: 'starfiddle-', postfix: '.c' });
    var oututFile = tmp.fileSync({ mode: 0o644, prefix: 'starfiddle-', postfix: '.wasm' });

    fs.writeSync(sourceFile.fd, source);

    let result =  await this.triggerCompile(sourceFile.name, oututFile.name);

    let compilation: Compilation = {};
    if(result.result) {
      compilation.binary = fs.readFileSync(oututFile.name, { }).toString('base64');
    }

    compilation.messages = result.stdout;
    compilation.errors = result.stderr;
    
    return compilation;
  }

  triggerCompile(sourceFile: string, outputFile: string): Promise<{ result: boolean, stdout: string, stderr: string }> {

    var promise = new Promise<{ result: boolean, stdout: string, stderr: string }>(
      (resolve) => {
        child_process.exec(this.getCommandLine(sourceFile, outputFile), (err, stdout, stderr) => {
          resolve({ result: !Boolean(err), stdout: stdout, stderr: stderr});
        });
      }

    );
    return promise;
  }

  emccPath = "/Users/GeoVah/Projects/emsdk/emscripten/1.38.31/emcc";

  private getCommandLine(sourceFile: string, outputFile: string): string {
      return `${this.emccPath} ${sourceFile} -Os -s WASM=1 -s SIDE_MODULE=1 -o ${outputFile}`;
  }
}

export default CppController;