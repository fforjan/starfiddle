import { Component, OnInit, Input } from '@angular/core';
import { CodeExecuted } from '../code.executed';

@Component({
  selector: 'app-sf-output',
  templateUrl: './sf-output.component.html',
  styleUrls: ['./sf-output.component.less']
})
export class SfOutputComponent implements OnInit {

  output: string;

  constructor() { }

  ngOnInit() {
  }

  @Input('executedCode')
  set executedCode(executedCode: CodeExecuted) {
    this.output = executedCode.output;
  }

}
