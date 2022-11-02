import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
/**ORDEM:
 * PROPRIEDADES
 * CONSTRUTUTORES
 * MÉTODOS
 * 
 * CRIANDO DINAMICIDADE
 criar propredades de cada classe
 
 */
//1º Passo- Propriedades

//1.1 Propriedades receber valores de forma externa
@Input() //só cria input onde vc quiser alterar externamente
 banner: String = "https://images.unsplash.com/photo-1663756387791-8249d8044df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

 //Input = decoration = compenentes das propriedades irá receber valores externos
 @Input() //ele vai receber valores externos a classe
 titulo: String = "Greece,Paros."; //Mudou para Paros, Greece

 @Input()
 userName: String = "Tobias Rademacher";

@Input()
 userFoto: String = "https://images.unsplash.com/photo-1665127049633-dc9ed449b167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

 @Input()
 corBtn: String = "grey"; //antes era black


  constructor() { }

  ngOnInit(): void {
  }

}
