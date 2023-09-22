console.log('====================');
console.log('====== Ejercicios de Ventas ======');
console.log('====================');

// Datos desde la Database
let user = 'pepe';
let pass = '123456Po';

//tomamos los datos del cliente
let usuario = alert('Ingrese su nombre de User: ')
let password = alert ('Ingrese su Password: ')

/* //procesamos la info y guiamos al usuario
if (user = usuario && pass =  password) {
    console.log('Bienvenido Pepe al sistema de administración')
    location.href = 'admin.html'
} else if {
    alert('usuario incorrecto, intente de nuevo')
    location.href = 'admin.html'
} else {
    console.log('Usuario o password incorrecto');
    location.href = 'error.html'
} */

if (user = usuario && pass =  password) {
    console.log('Bienvenido Pepe al sistema de administración')
    location.href = 'admin.html'
} else {
    console.log('Usuario o password incorrecto');
    location.href = 'error.html'
}
