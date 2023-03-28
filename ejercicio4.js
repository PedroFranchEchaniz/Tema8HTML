let valores = [true, 5, false, "hola", "adios", 2];


let verdad = valores[0];
let falso = valores[2];

let num1 = valores[1];
let num2 = valores[5];

if(isFinite(num1)&&isFinite(num2)){
    let suma = num1 + num2;
    let resta = num1 + num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
    let resto = num1 % num2;
}
alert(suma);
alert(resta);
alert(multiplicacion);
alert(division);
alert(resto);

if(valores[3]<valores[4]){
    alert(valores[3] +" es mas pequeño que " +valores[4]);
}else{
    alert(valores[3] +" es mas grande que " +valores[4]);
}

if(valores[0]!=valores[2]){
    alert("El resultado es true");
}

if(valores[0]==valores[2]){

}else{
   alert("El valor es false");
}

