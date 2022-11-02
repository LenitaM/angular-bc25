/**AULA DIA 18 DE OUT DE 2022 */

import { Component, Input, OnInit } from '@angular/core';
import { CartaoDeCredito } from './../interfaces/cartaoDeCrédito';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  /**
   * O angular vai entender que a propriedade 'dadosCartao'
   * poderá receber valores externos ao componente, ou seja,
   * eu estando em outro componente conseguirei mudar o valor
   * da propriedade 'dadosCartao'
   */
  @Input()
  dadosCartao: CartaoDeCredito = {
    ano: "40",
    mes: "06",
    cvc: "123",
    nome: "Luna Maria",
    numero: "1234 4567 7890 5431"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
