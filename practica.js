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


/*let nombre = prompt("Su nombre");
let apellido = prompt("Su apellido");
alert(combinarNombreYapellido(nombre, apellido));

function combinarNombreYapellido (nombre, apellido){
    return nombre+apellido;
}

let combinarNombreYapellido=(nombre, apellido)=>nombre+apellido;
alert(combinarNombreYapellido);*/

/*let palabras = new Array ();
let salir = false;

do{
    let palabra = prompt("Diga una palabra");
    if (palabra!=='0'){
        palabras.push(palabra);
    }else{
        salir = true;
    }
}while(!salir);

alert(palabras.join(' '));*/

/*let palabras = ['Esta', 'clase', 'es', 'guay'];
let salir = false;

do{
    let palabra = prompt("Diga una palabra");
    if (palabra!=='0'){
        let palabraFuera = palabras.pop();
        palabras.push(palabra);
        alert(palabras.join(' '));
    }else{
        salir = true;
    }
}while(!salir);

alert(palabras.join(' '));*/

let palabras = ['Esta', 'clase', 'es', 'guay'];

do{
    alert(palabras.shift());
}while(palabras.length>0);

alert(palabras.join(' '));

