// Declaração de função com (parâmetro/variável) TIPO 

function torrarPao(tipo) {
    console.log('Torrando pão, ' + tipo)
}

// Chamado da funcao torrarPao, atribuindo o 'árabe' a variável tipo 
// criada na declaração da função torrarPao  
torrarPao('árabe')

// Obs: Toda variável declarada dentro do escopo da função não poderá ser
//      reconhecida de forma global fora da função. Esta só existirá dentro da função
//      a qual foi declarada.