/* Declaração de função com (parâmetro/variável) TIPO 
   Como o parâmetro tipo, declarado na função torrarPao, 
   na sua iniciação não é necessário a utilização do tipo. Ex: (let tipo)
*/
function torrarPao(tipo) {
    console.log('Torrando pão, ' + tipo)
}

/*Chamado da funcao torrarPao, atribuindo o 'árabe' a variável tipo 
 criada na declaração da função torrarPao */
torrarPao('árabe')

/* Obs: Toda variável declarada dentro do escopo da função não poderá ser
      reconhecida de forma global fora da função. Esta só existirá dentro da função
      a qual foi declarada. */