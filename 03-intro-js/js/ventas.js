console.log('============================')
console.log('============== Ejercicios de Operadores en JS ==============')
console.log('============================')

let cantidadProductos = 0
let saldoTarjetaEfectivo = 5000;
let precioProducto = 2000;
let cantidadVenta = 0
let stockProducto = 100;
let saldoTarjetaCuotas = true;

if (saldoTarjetaEfectivo >= precioProducto || saldoTarjteaCuotas) {
    console.log('Compra realizada, muchas gracias!!!');

    //sumamos los productos comprados
    cantidadProductos++ ;

    //restamos elproducto vendido del stock
    stockProducto--;

    //restamos el costo del producto comprado
    saldoTarjetaEfectivo = saldoTarjetaEfectivo - precioProducto; //

    console.log(`Cliente: compró ${cantidadProductos} producto/s`);
    console.log(`Cliente: su saldo en la tarjeta es de: ${saldoTarjetaEfectivo} pesos`);

    //sumamos la cantidad de productos vendidos
    cantidadVenta++;
    console.log('============================')
    console.log(`Admin: La cantidad de ventas hasta ahora es de: ${cantidadVenta} producto/s`);
    console.log(`Admin: El dinero disponible en caja es de: ${precioProducto}`);
    console.log(`Admin: El stock disponible es de: ${stockProducto}`);
    
} else {
    console.log('No se realizó la compra')
}

console.log('============================')
console.log('============================')

//Bucles: ciclos que repitencódigo segun la necesidad
let productos = [];
let personas = ['Pepe', 'Perez', 123456789, 'San Martin 1200', true, 'Misiones'];

console.log(`Los productos son: ${productos}`);
console.log(`La cantidad de productos son: ${cantidadProductos}`);
console.log(`La cantidad de datos de la persona es: ${personas.length}`);
console.log(personas[5]);

//Bucle for
//       inicio             límite/final     paso
for (let index = 0; index < personas.length; index++) {
    console.log(`Los datos son: ${personas[index]}`);
    
}

console.log('============================')

for (let i = 0; i < personas.length; i++) {
    console.log(`Los datos son: ${personas[i]}`);
    
}

console.log('============================')

for (let i = 0; i < 10; i++) {
    console.log(`Los datos son: ${i}`);
    
}

console.log('============================')
console.log('============== Switch - While ==============')
console.log('============================')

/* if (condition) {
    if (condition) {
        if (condition) {
            if (condition) {
                
            }
        }
    }
} */

let dia = 'Miércoles';

switch (dia) {
    case 'Lunes':
        console.log('Hoy tenemos clases');
        break;
    case 'Martes':
        console.log('Hoy no tenemos clases');
        break;
    case 'Miércoles':
        console.log('Hoy sí tenemos clases');
        break;
    case 'Jueves':
        console.log('Hoy no tenemos clases');
        break;
    case 'Viernes':
        console.log('Jugamos');
        break;
    case 'Sábado':
        console.log('Paseamos');
        break;
    case 'Domingo':
        console.log('Descansamos');
        break;
    default:
        console.log('No corresponde a ningún día de la semana');
}

console.log('============================')

if (dia = 'Lunes') {
    console.log('Hoy tenemos clases');
} else if (dia = 'Martess') {
    console.log('Hoy no tenemos clases');
} else if (dia = 'Miércoles') {
    console.log('Hoy no tenemos clases');
} else if (dia = 'Jueves') {
    console.log('Hoy no tenemos clases');
} else if (dia = 'Viernes') {
    console.log('Hoy no tenemos clases');
}

console.log('============================')

let numero = prompt ('Introduce un número para el While: ')
let inicio = 0;

while (inicio <= numero ) {
    alert (`Contamos hasta ${numero} y estamos en ${inicio}`)
    console.log(`Contamos hasta ${numero} y estamos en ${inicio}`);



    // No olvidar el límite para el bucle
    inicio++;
}