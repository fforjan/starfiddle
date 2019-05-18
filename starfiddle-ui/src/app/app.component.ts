import { Component } from '@angular/core';
import { CodeDefinition } from './code.definition';
import { CodeCompiled } from './code.compiled';
import { CodeExecuted } from './code.executed';
import { CompileService } from './compile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'starfiddle';

  executedCode: CodeExecuted;

  constructor(private svc: CompileService) {
  }

  compileAndExecuteDefinition(codeDefinition: CodeDefinition) {
    this.executedCode = this.requestExecute(this.svc.requestCompile(codeDefinition));
  }

  requestExecute(codeCompiled: CodeCompiled): CodeExecuted {
    return new CodeExecuted(codeCompiled.result);
  }

 }
