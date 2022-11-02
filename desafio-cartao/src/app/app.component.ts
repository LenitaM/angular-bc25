import { Component } from '@angular/core';
import { CartaoDeCredito } from './interfaces/cartaoDeCrédito';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-cartao';
  formCartaoDeCredito: CartaoDeCredito = {
    ano: "",
    cvc: "",
    mes: "",
    nome: "",
    numero: "",
  }
}
