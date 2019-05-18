import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SfEditorComponent } from './sf-editor/sf-editor.component';

import { MonacoEditorModule } from 'ngx-monaco-editor';
import { SfOutputComponent } from './sf-output/sf-output.component';

@NgModule({
  declarations: [
    AppComponent,
    SfEditorComponent,
    SfOutputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MonacoEditorModule.forRoot() // use forRoot() in main app module only.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
