import { Injectable } from '@angular/core';
import { CodeDefinition } from './code.definition';
import { CodeCompiled } from './code.compiled';

@Injectable({
  providedIn: 'root'
})
export class CompileService {

  constructor() { }

  requestCompile(codeDefinition: CodeDefinition): CodeCompiled {

    return new CodeCompiled(codeDefinition.code);
  }
}
