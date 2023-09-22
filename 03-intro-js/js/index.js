// dos barras para los comentarios de una sola línea en JS
/* comentarios 
de varias 
líneas
en
JS
*/

/* Variables son espacios de memorias para datos.
No se pueden crear dos variables con el mismo nombre, son unicas.
No se empiezan con un numero, da error 
No se escriben las variables con error de sintaxis
camelCase para nombres compuestos*/
let nombre = 'Pepe';
let edad = 20; //números, sin comillas, si pones comillas se lo toma como letras

console.log(nombre, edad);

//camelCase
let nombreProvincia = 'Mendoza'; //String: letras, con comillas
console.log(nombreProvincia);

//variable: puede cambiar su valor o información
nombreProvincia = 'Córdoba'
console.log(nombreProvincia)

//declarar una variable 
let ciudad;

//asignar una variable
ciudad = 'Buenos Aires'

console.log ('============================');
// No se pueden crear dos variables con el mismo nombre, por mas que tengan dos palabras reservadas, la aplicaicon explota

var pais = 'Argentina'

//let pais = 'Brasil'

console.log(pais)

pais = 'Brasil'

console.log(pais);

console.log('============================')

//Cons es una variable constante, se declara inmediatamente y no se puede modificar.
const DNI = 12345678;

console.log(DNI);

//DNI = 2131534543; no se cambia en ninguna estancia del software.

console.log(DNI);

console.log('============================')

console.log('1. Mi nombre es ' + nombre + ' y mi edad es ' + edad + ' y vivo en la provincia de ' + nombreProvincia + ' y mi país es ' + pais);

console.log('============================')

console.log("2. Mi nombre es " + nombre + " y mi edad es " + edad + " y vivo en la provincia de " + nombreProvincia + " y mi país es " + pais);

console.log('============================')

//${} Interpolación de variables
console.log(`3. Mi nombre es ${nombre} y mi edad es ${edad} y vivo en la provincia de ${nombreProvincia}, y mi país es ${pais}.`); //Acento grave ALT+96

console.log('============================')

//Node solo lee codigo de JS sin manejo del dom, no lee las funciones de HTML

//alert ('Hola mundo de JS')

console.log('Hola nodemon!')

let hola = 'Hola gente';

console.log(hola);

//CTRL + C detiene la ejecución de nodemon