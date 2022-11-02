import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunicacao-entre-componentes';

  /**AULA 17 DE OUT DE 2022
   * 
   * FAZER UM MÉTODO NO GLOBAL
   */
  mostrarMsg() {
    alert("O upload foi concluído com sucesso")
  }
}


