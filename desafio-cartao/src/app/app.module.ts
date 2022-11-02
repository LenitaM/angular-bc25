import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //manipular mais fácil farmularios no ANGULAR
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartaoComponent } from './cartao/cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //adc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
