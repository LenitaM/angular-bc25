import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  transform(value: string): string {
    // 123.123.123-12
    const cpfFormatado = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    //ESTUDAR EXPRESSÃO REGULAR
    return cpfFormatado
  }
  }


/** Outra forma de fazer 
 * 
 * transform(value: string | number): string {
    
    return value + ' cpf';

 * 
 */
