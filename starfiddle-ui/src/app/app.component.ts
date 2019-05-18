import { Component } from '@angular/core';
import { CodeDefinition } from './code.definition';
import { CodeCompiled } from './code.compiled';
import { CodeExecuted } from './code.executed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'starfiddle-ui';

  executedCode: CodeExecuted;

  compileAndExecuteDefinition(codeDefinition: CodeDefinition) {
    this.executedCode = this.requestExecute(this.requestCompile(codeDefinition));
  }

  requestCompile(codeDefinition: CodeDefinition): CodeCompiled {

    return new CodeCompiled(codeDefinition.code);
  }

  requestExecute(codeCompiled: CodeCompiled): CodeExecuted {

    return new CodeExecuted(codeCompiled.result);
  }

 }
