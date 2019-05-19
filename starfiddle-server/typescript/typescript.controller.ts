import * as express from 'express';
import * as asc from 'assemblyscript/cli/asc';

import SourceCode from '../sourcecode.interface';
import Compilation from '../compilation.interface';
import * as util from 'util';

class TypescriptController {
  public path = '/typescript';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.post(this.path, this.compileRequest);
  }

  compileRequest = (request: express.Request, response: express.Response) => {
    var sourceCode = <SourceCode>request.body;

    let result: Compilation = null;
    if (sourceCode === null || util.isNullOrUndefined(sourceCode.content) ) {
      result = { errors: "Empty content, cannot compile" };
    }
    else {
      result = this.compile(sourceCode.content);
    }

    response.send(result);
  }

  compile(source: string): Compilation {

    let output: Compilation = {};
    let compiled = asc.compileString(source);

    if (compiled.stderr) {
      output.errors = compiled.stderr.toString();
    }

    if (compiled.stdout) {
      output.messages = compiled.stdout.toString();
    }

    if (compiled.binary) {
      output.binary = new Buffer(compiled.binary).toString('base64');
    }
    
    return output;
  }
}

export default TypescriptController;