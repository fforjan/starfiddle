import App from './app';
import TypescriptController from './typescript/typescript.controller';
 
const app = new App(
  [
    new TypescriptController(),
  ],
  5000,
);
 
app.listen();