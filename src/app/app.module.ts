import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LexerModule } from './lexer/lexer/lexer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LexerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
