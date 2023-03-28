let cadena = prompt("Introduzca una cadena");
let cadenaMayus = cadena.toUpperCase();
let cadenaMinus = cadena.toLowerCase();


function mayusYminus (texto){
    if(texto==cadenaMayus){
        alert("La cadena esta en mayusculas");
    }
    else if(texto==cadenaMinus){
        alert("la cadena esta en minusculas");
    }else{
        alert('la cadena contiene mayusculas y minusculas');
    }   
}

mayusYminus(cadena);

