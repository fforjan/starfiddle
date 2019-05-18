import * as express from 'express';
import * as asc from 'assemblyscript/cli/asc';

import Code from '../code.interface';

class TypescriptController {
    public path = '/typescript';
    public router = express.Router();
   
    constructor() {
      this.initializeRoutes();
    }
   
    public initializeRoutes() {
      this.router.get(this.path, this.compileRequest);
    }
   
    compileRequest = (request: express.Request, response: express.Response) => {
        response.send(this.compile("export function func(): string { return 'Hello World';} "));
    }

    compile(source: string) : { binary : Uint8Array, stdout:string, stderr:string } {
 
      let output : any= {};
      let compiled = asc.compileString(source);
      
      if(compiled.stderr)  {
        output.stderr = compiled.stderr.toString();
      }

      if(compiled.stdout)  {
        output.stdout = compiled.stdout.toString();
      }

      output.binary = compiled.binary;

      return output;
    }
  }
   
  export default TypescriptController;