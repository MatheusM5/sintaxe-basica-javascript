//let array = ["string", 1, true];
//console.log(array)

//let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
//console.log(array)

//forEach()
//array.forEach(function(item, indice){console.log(item, indice)});

//push() adiciona um novo item no array
/*array.push('novo item no final')
console.log(array)
*/

//pop() retira o ultimo item do array
/*array.pop()
console.log(array)
*/

//shift() retira um item do inicio do array
/*array.shift()
console.log(array)
*/

//unshift() adiciona um item no inicio do array
/*array.unshift('novo item no inicio')
console.log(array)
*/

//indexOf() mostra o indice do valor dentro do array, basta digitar o valor.
/*console.log(array.indexOf(true))
*/

//splice() remove ou substitui um item pelo indice
/*array.splice(0,3)
console.log(array)
*/

//slice() retorna uma parte de um array existente
/*let novoArray = array.splice(4,array.length)
console.log(novoArray)
*/

//objetos

let object = {string: 'string', number: 1, boolean: true, array: ['Array'], object_interno: {objetoInterno: 'Objeto interno'}}
//ex object.boolean para acessar o valor da propriedade 'boolen' dentro do objeto
//console.log(object.object_interno)
 
//desestruturação 
/*do objeto atribui valores de propriedades do objeto a variaveis ou utilizando chaves {}.*/

/*var string = object.string
console.log(string)

var array = object.array
console.log(array)
*/
var {string, boolean, object_interno} = object

console.log(string, boolean, object_interno)