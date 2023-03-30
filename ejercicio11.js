function liarlaConlosArrays(){
    let tamano = prompt('Indique un tamaño para el array');
    let miArray=[];
    let suma=0;
   
//lectura del array//

    for(let i=0;i<tamano;i++){
        let numero;
        let salirDelBucle = false;
        
        do{
            numero=prompt('Dime un número');
            if(isFinite(numero)&&numero>0){
                miArray[i] = parseInt(numero);
                salirDelBucle = true;
            }else{
                alert('deja de trolear y dime un numero')
            }
        }while(!salirDelBucle);
        for(let num of miArray){
            suma+=num;
        }
    }
    alert('El array es ' +miArray+ ' y la suma es ' +suma);

    let numero;
        let salirDelBucle = false;
        do{
            numero=prompt('Dime un número');
            if(isFinite(numero)&&numero>0){
                let primero = miArray.shift();
                suma-=primero;
                miArray[i] = parseInt(numero);
                suma+=numero;
                salirDelBucle = true;
            }else{
                
            }
        }while(salirDelBucle);
}

liarlaConlosArrays();