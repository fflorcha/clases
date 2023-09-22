console.log('============================')
console.log('============== Métodos de Array en JS ==============')
console.log('============================')

alert('Bienvenido a la app de Arrays');

let productos = []

console.log(`Los productos del arreglo son: ${productos}`);
console.log(`La cantidad deproductos del arreglo es ${productos.length} productos`);

//el confirm me retorna un valor booleano
let confirmar = confirm('Desea guardar un producto?');

console.log(`La respuesta del cliente es ${confirmar}`);

let cantidadProducto = parseInt(prompt('¿Cuántos productos desea cargar?'));

console.log(`La cantidad de Productos a cargar son ${cantidadProducto}`);

let inicio = 1;

while (inicio <= cantidadProducto) {
    console.log(`La respuesta del cliente es ${confirmar}`);
    
    console.log('============================')
    
    let agregoProducto = prompt('Introduzca un producto: ');
    
    //método para guardar datos en el array
    productos.push(agregoProducto);
    
    console.log(`Los productos del arreglo son: ${productos}`);
    console.log(`La cantidad de productos del arreglo es ${productos.length} productos`);
    
    console.log('============================')

    //limitar la ejecucuion del bucle
    //confirmar = false

    inicio++;
}



//aceptar o confirmar elecciones del cliente
//confirm('Desea guardar productos?');

//imprimir el listado de los productos
for (let i = 0; i < productos.length; i++) {
    console.table(`${i} - Producto: ${productos[i]}`);   
}
