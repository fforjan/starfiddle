import * as express from 'express';
import * as bodyParser from 'body-parser';
import { AngularApp } from './angular.app';
 
class App {
  public app: express.Application;
  public port: number;

  private angularApp: AngularApp;
 
  constructor(controllers, port) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.angularApp = new AngularApp(this.app);
  }


 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });    
  }
}
 
export default App;