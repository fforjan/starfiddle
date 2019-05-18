import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodeDefinition } from './code.definition';
import { CodeCompiled } from './code.compiled';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompileService {

  private url = '/api/typescript';

  constructor(private http: HttpClient) { }

  getLibraries(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  requestCompile(codeDefinition: CodeDefinition): Observable<CodeCompiled> {
    return of(new CodeCompiled(codeDefinition.code));
  }
}
