/**AULA DIA 13 DE OUT DE 2022 */

import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
/**STRING INTERPOLATION
* utilizar valores que propriedades possuem para mostr-alos para o usuário
* 
* Mostra os valores visualmente para os usuários, para ele poder ver, semelhante ao DOM
* 
*/

/**PROPERTY BINDING
 * utilizar valores de propriedades para atribuí-los a atributos HTML.
 * 
 */
tipoInput: string= "password"; //pega valores de propriedades e passar para os atributos do HTML / pode usar ele varias vezes no mesmo atributo

inputData: string = 'Digite sua senha'

title = 'Festival Almodóvar';

n1: number = 300;
n2: number = 500;

//FORMA DE CRIAR UM MÉTODO -//melhor tipo para da resultados para o usuários de método
somar(x: number, y:number) {
return x + y;
}

/**CRIANDO UM MÉTODO PARA MUDAR O INPUT */

mudarTipoDoInput(): void { //método quando não tem retorno é void = vazaio
  if(this.tipoInput == "password") { //this puxa elementos do próprio arquivo
    this.tipoInput = "text";
  }else {
    this.tipoInput = "password";
  }
}
/**EVENT BINDING:
 * Utilizado para ouvir eventos da DOM dentro do Angular
 */

/**TWO WAY BINDING */
num1: number = 0;
num2: number = 0; //linkar o valor a proppriedade no input dentro do input conchetes e parenteses dentro dele 

} //reprodução do DOM de forma mais básica e simples



