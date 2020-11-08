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
let str3 = 'Soy Hill 7u7'


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
//------>Nota: Este método no cambia el string, más bien regresa una nuevo que contiene
//------>      los strings que le especifiques
//sintaxis -> string.concat(string1, string2, ..., stringX)
/*otra forma de concatenar seria:
str4 = str2 + str1 + str3
console.log(`Uniendo str1 str2 y str3 :${str4}`)*/
let str4 = str1.concat(str2,str3)
console.log(`Uniendo str1 str2 y str3 :${str4}`)


//endsWith es un método que te dice si un string termina con un caracter
//o con otro estring que le definas, te regresa TRUE si el string termina
//con lo especificado y un FALSE sino.
//------>Nota: es sensitivo a mayusculas y minusculas así que debe ser
//------>      usado con precaución
//sintaxis -> string.endsWith(searchvalue, length)[searchvalue es lo que va a buscar y lenght se usa por si quieres especificar hasta donde parar de buscar]
console.log(`str4 termina con 7u7 :${str4.endsWith('7u7')}`)
console.log(`str1 termina con 7u7 :${str4.endsWith('?',str1.length)}`)


//fromCharCode es un metodo que te permite convertir un numeros Unicode a caracter
//te regresa un string con los numeros ya convertidos.
//sintaxis -> String.fromCharCode(n1, n2, ..., nX) [n1,n2, etc. son numeos UNICODE]
console.log(`Transformando 72, 69, 76, 76, 79 a caracteres: ${String.fromCharCode(72, 69, 76, 76, 79)}`)


//includes es un metodo que revisa si un string incluye un string definido
//te regresa un TRUE si el string lo incluye y un FALSE sino
//sintaxis -> string.includes(searchvalue, start)[el string que se buscará, desde donde empezará a buscar]
console.log(`str1 contiene "7u7" :${str1.includes('7u7')}`)
console.log(`str2 contiene con "bien?" :${str2.includes('bien?', 10)}`)


//indexOf es un método que te permite encontrar la posición de la primer conincidencia
//te regresa un numero que es la posición a partir donde encuentra la coincidencia
//------>Nota: es sensitivo a mayusculas y minusculas así que debe ser
//------>      usado con precaución, sino encuentra el string especificado regresa -1
//sintaxis -> string.indexOf(searchvalue, start)[el string que se buscará, desde donde empezará a buscar]
let n1 = str1.indexOf('pexs?')
let n2 = str1.indexOf('pexs?',18)
console.log(`En str1 "pexs?" aparece a partir de: ${n1}`)
console.log(`En str1 luego del caracter 18 "pexs?" aparece a partir de: ${n2}`)