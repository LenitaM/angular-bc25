/* AULA DIA 28 DE OUT DE 2022 

SERVICES

API são serviçoes na internet usados para pegar dados de usuários, sites etc. No angular possui um forma única em conversar com API's. Requisições = pegar dados de api's

Services são para poder fazer alguma lógica que vc vai repetir em vários partes do projeto, a mais usuada é nas requisções. ex: recuperar as lógicas, diminuindo as linhas de cógidos.


*/

import { Injectable } from '@angular/core';

/**
 * providedIn informa onde o serviço será fornecido
 */

/**
 * A ideia de um serviço no Angular
 * é encapsular alguma lógica que pode
 * ser utilizada em vários locais da
 * sua aplicação
 */
 // 1º classe: criando informações dos clientes 
interface Cliente { 
  nome: string
  sobrenome: string
  telefone: string
  id: number
  email: string
  cpf: string
}

//2º simular para criar requisções em HTTP para pegar dados dos clientes, simular o crud
/**
 * C -> Create - criar um cliente
 * R -> Read - ler dados os de um cliente ou de todos
 * U -> Update - atualizar os dados de um cliente
 * D -> Delete - excluir um cliente
 */

@Injectable({
  providedIn: 'root' // 'root' = faz referência ao AppModule, pode usar o serviço em qualquer campo do site // providedIn: onde vai prover o serviço dele 
  // pode colocar em pastas especificas como MaterialModule, aqui ele se torna universal. 
})
export class ClientesService { //constructor

  //Esse array é uma simulação do banco de dados, cada objeto são as informações do clientes
  private clientes: Cliente[] = [ //services que forneça dados de clientes
    { 
      //objetos
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '11111111111',
      email: 'frealves@gmail.com',
      telefone: '40028922',
      id: 1
    },
    {
      nome: 'José',
      sobrenome: 'Almir',
      cpf: '22222222222',
      email: 'jose.almir@soulcodeacademy.org',
      telefone: '40028922',
      id: 2
    },
    {
      nome: 'Renato',
      sobrenome: 'Pereira',
      cpf: '33333333333',
      email: 'renato.pereira@soulcodeacademy.org',
      telefone: '40028922',
      id: 3
    }
  ]

  constructor() { }

  //3º criar métodos que serão repetidos no projeto como HTTP
  listarClientes(): Cliente[] { // método de clientes vai retornar o array de clientes para pegar todos
    // toda a lógica pra acessar a api e pegar os dados
    return this.clientes
  }
                     //parametro usado para achar o cliente a partir do id (id: number)
  listarClientePeloId(id: number): Cliente | undefined { // pegar clientes pelo id, ideia de sempre vai retornar um cliente, mas no projeto pode ter nenhum cliente de acordo com um id
    /**
     * 
     * Cliente | undefined = union type acopla varios tipos de variaveis / undefined = não encontrado
     * 
     * 
     * o método find() dos arrays serve para procurar algum valor
     * dentro do array
     *
     * é necessário que se passe como parâmetro do método find() uma função.
     * Essa função será utilizada dentro do método para procurar um valor. A
     * função que será passada DEVE retornar sempre um valor booleano
     */

    // SELECT * FROM clientes WHERE id = 2

    const clienteEncontrado = this.clientes.find((c) => {
      return c.id == id // esse id e parametro. O id do cliente c seja igual ao id do parametro
    }) // o que acontece dentro do find = ele faz um laço de repetição pegando todos os valores dentro do array que vai dar vdd ou falso e caso de verdeiro significa que satisfaz a condição passada. Significa dizer que é o objeto que está procurando

    return clienteEncontrado
  } //cod final sempre é esse no começo
}
