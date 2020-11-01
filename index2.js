//METODOS DE STRING

//para declarar un string, se puede hacer de tres maneras:

var phrase = 'Hola mundo!' //con comillas simples
var phrase2 = "Hola mundo!" //con comillas dobles
var phrase3 = `Hola mundo!` //con comillas francesas

console.log(`phrase con comillas simples: ${phrase}\nphrase con comillas dobles: ${phrase2}\nphrase con comillas francesas: ${phrase3}`)

//-------parentesis--------> \ es un caracter escape que sirve para poder ordenar mejor el texto que se imprime en consolas dando saltos de linea, etc.

//los strings pueden tener propiedades como por ejemplo:

var sizePhrase = phrase.length //esta propiedad te regresa el tamaño o numero de caracteres del string
console.log(`El numero de caracteres de phrase: ${sizePhrase}`)

