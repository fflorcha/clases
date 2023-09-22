//arreglos - arrays - vectores
let banana = 'banana';
let manzana = 'Manzana';
let peras = "peras";

//Booleanos
let falso = false;
let verdadero = true;
let indefinido; //la variable no esta inicializada, habia azúcar pero no se donde está.
let noExiste = null; // hubo azúcar, pero ya solo queda el paquete vacio.

indefinido = 'ahora existo'

console.log(falso);
console.log(verdadero);
console.log(indefinido); 
console.log(noExiste);

//creamos un array de frutas
//Variables tipo String
let frutas = ['Bananas', 'Manzanas', 'Peras', 'Ciruelas'];

console.log(frutas); 

//metodo de los arreglos me dice la cantidad de datos que posee.
console.log(`La cantidad de datos en el arreglo frutas es de ${frutas.length}`);

// index - cada informacion ocupa un lugar.
//index           0        1         2             3             4       5
let personas = ['Pepe', 'Perez', 123456789, 'San Martin 1200', true, 'Misiones'];

console.log(personas);

console.log(`La cantidad de datos en el arreglo personas es de ${personas.length}`);

console.table(personas);
console.table(frutas);

console.log('============================')

let estudiantes = [];

console.log(`La cantidad de datos en el arreglo persona es de ${estudiantes.length}`);

console.log('============================')

//JSON Objeto con notación Javascript, base de datos.

let objetoJson = {
    nombre: 'Pepe',
    apellido: 'Perez',
    DNI: 123456789,
    dirección: 'San Martin 1200',
    pais: 'Argentina'
}

console.log(objetoJson);

// API Bases de datos públicas o privadas.