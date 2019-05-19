import { Component } from '@angular/core';
import { CodeDefinition } from './code.definition';
import { CodeCompiled } from './code.compiled';
import { CodeExecuted } from './code.executed';
import { CompileService } from './compile.service';
import { ExecuteService } from './execute.service';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'starfiddle';

  executedCode: CodeExecuted | CodeCompiled;

  constructor(private compileService: CompileService, private executeService: ExecuteService) {
  }

  compileAndExecuteDefinition(codeDefinition: CodeDefinition) {
    this.compileService.requestCompile(codeDefinition).subscribe( compiled =>  {
      this.requestExecute(compiled).subscribe(executed => this.executedCode = executed);
    });
  }

  requestExecute(codeCompiled: CodeCompiled): Observable<CodeExecuted | CodeCompiled> {
    if (codeCompiled.result) {
      return from(this.executeService.Execute(codeCompiled));
    }
    return of(codeCompiled);
  }

 }
