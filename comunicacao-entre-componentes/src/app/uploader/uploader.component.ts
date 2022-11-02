/**aula 17 de out de 2022 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  //Proriedade

  /**Event Emitter = é uma classe que te permite criar eventos customizados dentro do Angular 
   * 
   * caso não aparece a classe você escrever a classe em import 
  */
  @Output() //Emitir como um evento como do HTML. Emitir valores para fora, para os usúarios. Informa para que o upload foi concluído
  //propriedade: classe <tipo> = new classe <tipo> parentese
  uploadCompleto: EventEmitter <string> = new EventEmitter<string>() //tem que criar outro Event Emitter pq o ty precisa que tipifique.


  constructor() { }

  ngOnInit(): void {
  }
//Método
  fazerUpload() {
    alert("Upload iniciado...")
    /**
     * o método .emitparenteses serve para iniciar a emissão do evento personalizado
     */
    this.uploadCompleto.emit() //.emit vai exibir a frase que o upload foi concluído
  }
}
