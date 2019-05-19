import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CodeDefinition} from '../code.definition';

@Component({
  selector: 'app-sf-editor',
  templateUrl: './sf-editor.component.html',
  styleUrls: ['./sf-editor.component.less']
})
export class SfEditorComponent implements OnInit {

  codeBuffer = {
    typescript: `export function main(): number {
      return 42;
  }`,
    cpp: `int main() {
      return 42;
    }`
  };

  @Output() compileRequested = new EventEmitter();

  set selectedLanguage(value: string) {
    this.editorOptions = {theme: 'vs-dark', language: value};
  }

  get selectedLanguage() {
    return this.editorOptions.language;
  }

  editorOptions = {theme: 'vs-dark', language: 'typescript'};

  set code(value: string) {
    this.codeBuffer[this.editorOptions.language] = value;
  }

  get code() {
    return this.codeBuffer[this.editorOptions.language];
  }

  constructor() { }

  ngOnInit() {
  }

  compileCode() {
    this.compileRequested.emit(new CodeDefinition(this.code, this.editorOptions.language));
  }

}
