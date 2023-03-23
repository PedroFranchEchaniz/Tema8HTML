let cadena = prompt("Introduzca una cadena");

let cadenaMayus=cadena.toLocaleUpperCase;
let cadenaMinus=cadena.toLocaleLowerCase;

function mayusYminus (texto){
    if(texto===(cadenaMayus)){
        alert("La cadena esta en mayusculas");
    }
    if(texto===(cadenaMinus)){
        alert("la cadena esta en minusculas");
    }
    if(texto !== cadenaMayus || texto !== cadenaMinus){
        alert("La cadena tiene mayusculas y minusculas");
    }
}

mayusYminus(cadena);
alert(cadena);