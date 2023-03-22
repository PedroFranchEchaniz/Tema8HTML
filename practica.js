/*let pwd = '1234';
let pwd2 = '12234';

let mensaje = (pwd === pwd2)?"Contraseña correcta":"Las contraseñas no coinciden";

alert(mensaje);*/

/*let mensaje = "hola holita vecinito";

for(let letra of mensaje){
    alert(letra);
}*/

/*let mensaje = ["hola", "holita", "vecinito"];
for(let palabra of mensaje){
    alert(palabra);
}*/


let nombre = prompt("Su nombre");
let apellido = prompt("Su apellido");
alert(combinarNombreYapellido(nombre, apellido));

function combinarNombreYapellido (nombre, apellido){
    return nombre+apellido;
}