//tipos de função

//declarativa
function funcaoDeclarativa(){
    console.log('Essa é uma função declarativa!')
}

funcaoDeclarativa()

//Expressões de funções - atruibuindo uma função a uma variavel
var funcao = function() {
    console.log('Essa função está dentro de uma variavel e não precisa de nome.')    
}

funcao()

//arrow function - funções anônimas
var funcaoArrow = () => {
    console.log('Essa é uma arrow function/uma função anônima');
}

funcaoArrow()

//funções aritméticas
//