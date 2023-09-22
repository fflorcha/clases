console.log('============================')
console.log('============== Funciones en JS ==============')
console.log('============================')

//funciones: porciones de código con alguna terea específica.

/* if (condition) {
    
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

while (condition) {
    
} */

function miFuncionSaludar() {
    console.log('Hola Mundo');
}

//para ejecutar una función la invocamos
miFuncionSaludar();

console.log('============================')

let nombre = 'Pepe';//variable global

/* función con un parámetro/argumento/información para ejecutarse
variable local
function otroSaludo(nombrePersona) { 
    console.log(`Hola Mundo, soy ${nombrePersona}`);
}

otroSaludo('Maria');

console.log(p);

let otroNombre = 'Juan'

otroSaludo(otroSaludo); */

console.log('============================')

let uno = 150;
let dos = 250;

function sumar(numeroUno, numeroDos){
    let resultado = numeroUno + numeroDos;
    console.log(`El resultado de la suma es: ${resultado}`);
}

sumar(800, 1000);
sumar(uno, dos);

console.log('============================')

function multiplicar(numeroUno, numeroDos){
    let resultado = numeroUno * numeroDos;
    return resultado; //Return corta la función

    console.log(`Estoy después del Return`);
}

multiplicar(1000,50)

console.log(`El resultado de la multiplicación es: ${multiplicar(500, 50)}`);

console.log('============================')

//funciones con funciones como parámetro - callback
function dameResultado (a, b, callback) {
    let resultado = callback(a, b)
    console.log (`El resultado de la multiplicación es ${resultado}`)
}

console.log('============================')

//invocamos al callback
dameResultado(100, 50, multiplicar);

console.log('============================')

//funcion flecha - ECMA 6
const pepe = () => {
    console.log('Soy una función flecha');
} //Resumen de una funcion tradicional

//arrow function sin parametros
const otroPepe = (nombre) => {
    console.log(`Soy una función ${nombre}`);
}

//se pueden sacar las {} si la funcion es una sola
const miOtroPepe = (nombre) => console.log(`Soy una función ${nombre}`);

pepe();
otroPepe('flecha');
miOtroPepe('Sin llaves en la función')

console.log('============================')

function dameObjetos(nombre, apellido){
    let persona = {
        nombre: nombre,
        apellido: apellido
    }
    return persona;
}

dameObjetos('Pepe', 'Pérez');

console.log(`La persona es: `);

console.log('============================')



