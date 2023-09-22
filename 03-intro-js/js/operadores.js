console.log('============================')
console.log('============== Operadores en JS ==============')
console.log('============================')

//Operadores aritméticos
// + - * / %

let miNumero = 5000;
let otroNumero = 200;
let resultado;

resultado = miNumero + otroNumero;
console.log(`El resultado de la SUMA es ${resultado}`);

resultado = miNumero - otroNumero;
console.log(`El resultado de la RESTA es ${resultado}`);

resultado = miNumero * otroNumero;
console.log(`El resultado de la MULTIPLICACIÓN es ${resultado}`);

resultado = miNumero / otroNumero;
console.log(`El resultado de la DIVISIÓN es ${resultado}`);

//Módulo es el resto de la división, no el resultado.
resultado = miNumero % otroNumero;
console.log(`El resultado de la MÓDULO es ${resultado}`);

console.log('============================')

//Funciones para convertir string a números
//parseInt () números enteros
//parseFloat() números decimales
//Number()
let data = parseInt(prompt('Ingrese un número para la calculadora: '));
let convertido = parseInt(data)
let dataDos = parseInt(prompt('Ingrese otro número para la calculadora: '));

resultado = data + dataDos

alert(`El resultado de la SUMA es ${resultado}`)

console.log('============================')

let contador = 0;
console.log(`El contador está en ${contador}`);

contador = contador + 1;
console.log(`El contador está en ${contador}`);

contador ++; //Incrementa con paso 1
console.log(`El contador está en ${contador}`); //2

contador = contador + 2;
console.log(`El contador está en ${contador}`);

contador += 2; //Incrementando con paso 2

console.log(`El contador está en ${contador}`);

contador += 20; // =asignarle un valor a la variable
contador += 50;
contador += 100;
contador += 200;

console.log(`El contador está en ${contador}`);

//Decremento
contador = contador - 1;
contador --; //Decremento con paso 1

console.log(`El contador está en ${contador}`);

contador *= 50;
console.log(`El contador está en ${contador}`);

contador -= 50; //Decremento con paso 2
console.log(`El contador está en ${contador}`);

console.log('============================')

//Operadores Relacionales
// < > == === != 
let años = 15;
let email = prompt('Introduce tu email: ');
let Admin = 'Juan'; 

//Operadores lógicos
// && || !

//Condicionales
//if (true) {se ejecuta el código}
//if (false) {NO se ejecuta el código}

if (años < 18) { //false
    console.log(`1. No puede comprar bebidas porque no tiene ${años} años de edad`);
}

if (años > 18) { //false
    console.log(`2. No puede comprar bebidas porque no tiene ${años} años de edad`);
}

if (años >= 18) { //true
    console.log(`3. Si puede comprar bebidas porque no tiene ${años} años de edad`);
}

console.log('============================')

if (email == 'juan@gmail.com'){//true
    console.log(`Bienvenido Administrador ${Admin}`);
    alert(`Bienvenido Administrador ${Admin}`)
}else{//sino : si es falsa la condicion, se ejeu¿cuta la que esta en else
    alert(`Email incorrecto,no es el Administrador`)
}