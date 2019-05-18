import { Component } from '@angular/core';
import { CodeDefinition } from './code.definition';
import { CodeCompiled } from './code.compiled';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'starfiddle-ui';

  output = '';

  compileDefinition(codeDefinition: CodeDefinition) {
    const compile = this.requestCompile(codeDefinition);
    this.output = compile.result;
  }

  requestCompile(codeDefinition: CodeDefinition): CodeCompiled {

    return new CodeCompiled(codeDefinition.code);
  }

 }
