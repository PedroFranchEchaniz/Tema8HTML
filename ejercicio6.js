let dni = prompt("Diga su numero de dni");


let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "Y", "H", "L", "C", "K", "E", "T"];
if(dni<=0 || dni >99999999){
    alert("Numero incorrecto")
}
else{
    let letra = prompt("Indique la letra").toUpperCase();    
    if (letras[dni%23]==letra){
        alert("Todo correcto");
    }else{
        alert("Hay un error con la letra, su letra deberia ser " +letras[dni%23]);
    }
}