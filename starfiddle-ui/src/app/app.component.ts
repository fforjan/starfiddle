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

  executedCode: CodeExecuted | CodeCompiled;

  constructor(private svc: CompileService) {
  }

  compileAndExecuteDefinition(codeDefinition: CodeDefinition) {
    this.svc.requestCompile(codeDefinition).subscribe( compiled =>  {
      this.executedCode = this.requestExecute(compiled);
    });
  }

  requestExecute(codeCompiled: CodeCompiled): CodeExecuted | CodeCompiled {
    return codeCompiled;
  }

 }
