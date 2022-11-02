//** AULA DIA 27 DE OUT DE 2022: VALIDAÇÕES EM REACTIVE, ENDEREÇO, FORMGROUP e FORMBUILDER */

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  
  /** FORMGROUP */

  /**
     * Reactive Forms possui estruturas
     * para representar o formulário
     * dentro do TypeScript
     */

  /**
   *
   * FormControl representa um elemento do seu formulário
   */
  nome: FormControl = new FormControl('')
  email: FormControl = new FormControl('')
  senha: FormControl = new FormControl('')

  /**
   * FormGroup é uma estrutura do Reactive Forms
   * que permite agruparmos forms controls dentro
   * dela, para que o acesso aos valores seja mais
   * simples
   */

  /*   dadosForm: FormGroup = new FormGroup({
      nome: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
      email: new FormControl('', [ Validators.email, Validators.required ]),
      senha: new FormControl(''),
      endereco: new FormGroup({
        cep: new FormControl(''),
        rua: new FormControl(''),
        complemento: new FormControl(''),
        numero: new FormControl('')
      })
    }) */

    /**FORMBUILDER */

  /**
   * O método group() do formBuilder é responsável por criar um novo
   * Objeto do tipo FormGroup
   */

  /**
   * FormArray -> É utilizado para armazenar form controls, form groups ou
   * outros form arrays dentro de um array
   *
   * O FormArray precisa estar dentro de um FormGroup
   */
  dadosForm: FormGroup = this.fb.group({ //referencia do FormBuilder
    nome: ['', [Validators.required, Validators.minLength(5)]], // [''] = new FormControl('')
    email: [''],
    senha: [''],
    endereco: this.fb.group({
      cep: [''],
      rua: [''],
      complemento: [''],
      numero: ['']
    }),
    telefones: this.fb.array([
      [''] //pode colocar form group para fazer varios endereções por exemplo. Nesse caso é telefones, no array não precisa especificar o formControl
      //para cada campo ele vai gerar novos telefones no formulario

      //pode ser new formControl ('')
    ])
  })

  /**
   * Transformar o Abstract Control -> Form Array
   */
  tels = this.dadosForm.get('telefones') as FormArray // AS = retorna como formArray

  /*
    Form Builder -> Objeto que permite criar FormControls, FormGroups ou FormArrays com uma
    sintaxe menor
  */
  constructor(
    //vai injetar um componente formbuilder e vai executar automaticamente
    private fb: FormBuilder //precisa importar
    //modificardo de acesso e nome do parametro fb (nome da proreidade = formbuilder) vai se torna atributo e parametro, coloca dentro dela dependências que ela vai necessitar 
  ) { }

  ngOnInit(): void {
  }

  enviar() {
    /*
      A propriedade 'value' do formControl possui
      o valor que foi digitado dentro do campo do
      formulário
    */

    console.log(this.dadosForm.value)
  }

  adicionarCampoDeTelefone() {
    this.tels.push(new FormControl('')) // ou (['']) (outra forma de representar FormControl)
  }
}