import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodeDefinition } from './code.definition';
import { CodeCompiled } from './code.compiled';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import SourceCode from '../contracts/sourcecode.interface';
import Compilation from '../contracts/compilation.interface';
import * as util from 'util';

@Injectable({
  providedIn: 'root'
})
export class CompileService {

  private url = '/api/typescript';

  constructor(private http: HttpClient) {
  }

  compile(sourceCode: SourceCode): Observable<Compilation> {
    return this.http.post<Compilation>(this.url, sourceCode);
  }

  convert(compilation: Compilation): CodeCompiled {
    return new CodeCompiled(!util.isNullOrUndefined(compilation.errors), compilation.messages, compilation.errors);
  }

  requestCompile(codeDefinition: CodeDefinition): Observable<CodeCompiled> {
    return map(this.convert)(this.compile({filename: 'foo.ts', content: codeDefinition.code}));
  }
}