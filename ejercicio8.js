
numero=prompt("Indique un numero");
if(isFinite(numero)){
function parImpar (n){
    if(n%2==0){
        alert("El numero es par");
    }else{
        alert("El numero es impar");
    }
}

function esPas(numero){
    return numero%2===0?'El resultado es par':'El resultado es impar';
}
}else{
    alert("Mete numero merluzo")
}

parImpar(numero);