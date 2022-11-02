/* AULA DIA 28 DE OUT DE 2022 
*/
import { Component } from '@angular/core';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';

  // fazendo injeção de dependências dentro do componente
  constructor(
    public cService: ClientesService // precisa ser importado
  ) {}

  // ciclo de vida executado quando o seu componente é renderizado na tela, cada ciclo de vida é representado por um método, existem 8 e são feitos em estágios
  ngOnInit(): void { //usado para fazer um carregamento inicial, como fazer aquisições para o api para pegar os dados dos clientes, quero que apareça os dados dos clientes na tela
    const clientes = this.cService.listarClientes()
    console.log(clientes)
  }
}

/** Os comandos dos cliclo de vida em ordem de execução (8) dos compoenentes
 * 
 * 1 - ngOnChanges()
 * 2 - ngOnInit() recomendado estudar
 * 3 - ngDoCheck()
 * 4 - ngAfterContentInit()
 * 5 - ngAfterContentChecked()
 * 6 - ngAfterViewInit()
 * 7 - ngAfterViewChecked()
 * 8 - ngOnDestroy() recomendado estudar
 * 
 * 
 * Um exemplo é poder criar card mostrando cada cliente
 * 
 * vc pode fazer serviços de upload de arquivos, clientes etc. 
 */