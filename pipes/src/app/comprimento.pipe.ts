/**AULA DIA 24 DE OUT DE 2022: ESTRUTURAÇÃO DOS PIPES */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //decoration
  name: 'comprimento'
  //forma de declaração dos parametros no pipe
}) 
export class ComprimentoPipe implements PipeTransform {
/**
 * 
 * Pegar um array qualquer e retornar a quantidade de elementos dentro dele
 * 
 * value: parametro responsável por pegar o valor que será transformado
 * unknown = valor desconhecido no pipe
 * any = aceita qualquer tipo de valor.
 * 
 * any[] = receber um array e dentro dele pode ter qualquer tipo de variável
 * 
 * ... (rest operator )= passa valores infinitos para a função args: são argumentos
 * ...args: unknown[] - pode ser apagado
 * 
 * no min tem que ter o parametro valeu, pode por mais parametros.
 * O parametro 'valeu' é obrigatorio, mas caso queira passar outros parametros é possível.
 */
  transform(value: any[]): unknown { //pega um array de qualquer tipo (any[]) e da um retorno
    
    return value.length //retorna q quantidade de valores que existe dentro do array
  
  } //transform = método que chama o pipe é a barrinha que coloca o método

}
