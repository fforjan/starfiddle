import App from './app';
import TypescriptController from './typescript/typescript.controller';
import CppController from './cpp/cpp.controller';
 
const app = new App(
  [
    new TypescriptController(),
    new CppController()
  ],
  5000,
);
 
app.listen();