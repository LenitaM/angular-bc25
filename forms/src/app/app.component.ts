/**aula dia 25 de out de 2022
 * 
 * a forma de trabalhar com ty no angular é atráves de template
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  dadosUsuario = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  } //Dando interatividade aos componentes do formulário

  enviarForm() {
    alert('Formulário Enviado!')
  }
}