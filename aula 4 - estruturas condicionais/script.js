//estruturas condicionais
/*
var jogador1 = 1;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos')

//if else if e else
if(jogador1 > 0 && jogador2 == 0) {
    console.log('jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguem marcou ponto!');
}

//swtich/case
switch (placar) {
    case placar = jogador1 > jogador2: //não esquecer dos 2 pontos :
        console.log('jogador 1 ganhou!')
        break //não esquecer do break
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou!')
        break
    default:
        console.log('Ninguem ganhou"')
}
*/

//estruturas de repetição

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

//for - executa uma instrução até que ela seja falsa
for(let indice = 0; indice < array.length; indice++) {
    console.log(indice)
    //console.log(array[indice])
}

//for/in - executa a repetição a partir de uma propriedade
//com array
for(let i in array) {
    console.log(i) 
}

//com object
for(i in object) {
    console.log(i)
}

//for/of - executa repetição a partir de valor
//com array 
for(i of array) { //imprime o valor de cada indice
    console.log(i)
}

//com object - não funciona com object
for(i of object.propriedade1) {
    console.log(i)
}

//while
var a = 0;

while(a < 10) {
    a++
    console.log(a)
}

//doWhile
var b = 0;
do{
    b++
    console.log(b)
} while(b < 10)