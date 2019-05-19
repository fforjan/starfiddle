import { Component, OnInit, Input } from '@angular/core';
import { CodeExecuted } from '../code.executed';
import { CodeCompiled } from '../code.compiled';

@Component({
  selector: 'app-sf-output',
  templateUrl: './sf-output.component.html',
  styleUrls: ['./sf-output.component.less']
})
export class SfOutputComponent implements OnInit {

  output: string;
  isError: boolean;

  constructor() { }

  ngOnInit() {
  }

  @Input('executedCode')
  set executedCode(executedCode: CodeExecuted | CodeCompiled) {

    if (executedCode instanceof CodeCompiled) {
      this.output = (executedCode as CodeCompiled).compileErrors;
      this.isError = true;
    } else {
      this.output = (executedCode as CodeExecuted).output;
      this.isError = false;
    }
  }

}
