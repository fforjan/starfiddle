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
  code = `export function main(): number {

    return 42;
}`;

  constructor() { }

  ngOnInit() {
  }

  compileCode() {
    this.compileRequested.emit(new CodeDefinition(this.code));
  }

}
