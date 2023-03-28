let numero=prompt("Indique un número");

let resultado=numero

if(isFinite(numero)){
for(let i = numero-1; i>0; i--){
    resultado*=i;
}

alert(resultado);
}else{
    alert("Mete numero merluzo");
}