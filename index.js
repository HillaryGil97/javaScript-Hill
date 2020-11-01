// Existen 3 tipos de varaiables en javascript

const PI = 3.1416  //const declara constantes, es decir variables que jamás cambiaran de valor en todo el programa.
var b = 'Hillary' //var declara variables globales que podran ser usadas en cualquier parte del codigo.
let a = 'Anahi' //let declara varaibles locales que solo son usadas en sus modulos.

//javaScript se encarga de auto detectar el tipo de dato al que pertenece cada variable por lo que no es necesario
//hacer uso de int, float, string o array al principio de la declaración de variables.

var name = 'Dana'
let name2 = 'Edwin' // por buenas practicas los nombres de constantes se ponen en mayusculas y 
const NAME3 = 'Hillary' // las demás variables se designan con algo llamado CamelCase (poner en mayuscula el inicio de una parte de la varisble por ejemplo horadeldia seria horaDelDia)

function sayHello(){
    let name = 'Hill'
    let name2 = 'Naomi'
    console.log(name,name2)
}

sayHello()
console.log(`Nombre 1: ${name}`)//esta forma de mandar a imprimir en consola se le conoce como 
console.log(`Nombre 2: ${name2}`) //        TEMPLATE LITERAL

