import * as express from 'express';
import Code from '../code.interface';

class TypescriptController {
    public path = '/typescript';
    public router = express.Router();
   
    constructor() {
      this.initializeRoutes();
    }
   
    public initializeRoutes() {
      this.router.get(this.path, this.compile);
    }
   
    compile = (request: express.Request, response: express.Response) => {
        const post: Code = request.body;
        response.send(post);
    }
  }
   
  export default TypescriptController;