import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CodeDefinition} from '../code.definition';

@Component({
  selector: 'app-sf-editor',
  templateUrl: './sf-editor.component.html',
  styleUrls: ['./sf-editor.component.less']
})
export class SfEditorComponent implements OnInit {

  @Output() compileRequested = new EventEmitter();

  editorOptions = {theme: 'vs-dark', language: 'typescript'};
  code = `declare namespace console {
    function log(s: string): void;
}

// declare let console: Console;

export function entry(): void {

    console.log("Hello world");
}`;

  constructor() { }

  ngOnInit() {
  }

  compileCode() {
    this.compileRequested.emit(new CodeDefinition(this.code));
  }

}
