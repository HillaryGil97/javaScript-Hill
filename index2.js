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

let str1 = "Holis morro, que pexs?"
let str2 = 'Todo bien? Todo correcto? Y YO QUE ME ALEGRO!'

//-------------------------->Metodos de indexación<-------------------------//

//charAt es un método que regresa el caracter que se encuentre en una posición
//especifica del string
//sintaxis -> string.charAt(index) [index debe ser entero]
console.log(`El primer caracter de str1 es: ${str1.charAt(0)}`)

//charCodeAt es un método que regresa el Unicode de el caracter que se le indique
//------>Nota: si el método regresa "NaN" es porque no identifica como caracter el index especificado o
//------>      porque index es menor o mayor al tamaño del string 
//sintaxis -> string.charCodeAt(index) [index debe ser entero]
console.log(`El Unicode del caracter 11 de str1 es: ${str1.charCodeAt(11)}`)

//Otra forma de acceder a algun valor del string es tratandolo como un array de forma directa
console.log(`El caracter 8 de str1 es: ${str1[8]}`)

//concat es un método para concatener dos o más strings