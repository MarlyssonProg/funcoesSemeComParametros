/* Declaração de função com (parâmetro/variável) TIPO 
   Como o parâmetro tipo, declarado na função torrarPao, 
   na sua iniciação não é necessário a utilização do tipo. Ex: (let tipo)
*/
function torrarPao(tipo, formato, sabor) {
    console.log(`Torrando pão, ${tipo} , ${formato} e ${sabor}`)
}

/*Chamado da funcao torrarPao, atribuindo o 'árabe' a variável tipo 
 criada na declaração da função torrarPao */
torrarPao('árabe', 'quadrado', 'doce')

/* Obs: Toda variável declarada dentro do escopo da função não poderá ser
        reconhecida de forma global fora da função. Esta só existirá dentro da função
        a qual foi declarada. */

/* Obs: Sempre que tentar definir o valor a variável parâmetro em uma função,
onde a mesma não foi passada no seu chamado, o valor padrão ou defaul deverá 
ser declarado dentro da criação da função e deverá ficar sempre como o
última variavel a ser chamada. */