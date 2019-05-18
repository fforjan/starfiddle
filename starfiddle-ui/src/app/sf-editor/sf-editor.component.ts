import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sf-editor',
  templateUrl: './sf-editor.component.html',
  styleUrls: ['./sf-editor.component.less']
})
export class SfEditorComponent implements OnInit {

  editorOptions = {theme: 'vs-dark', language: 'typescript'};
  code = 'export function entry() {\nconsole.log("Hello world!");\n}';

  constructor() { }

  ngOnInit() {
  }

}
