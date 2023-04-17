//Realiza un script que pregunte al usuario por un tamaño de array y pida tantos números como el tamaño indicado, de manera que los vaya almacenando en el array. Una vez pedidos todos los datos, imprima por pantalla el array y la suma de todos sus elementos. El programa no se detendrá aquí, sino que continuará pidiendo números. Por cada número, debe eliminar el primer elemento del array, añadir el nuevo número al final del array y actualizar la suma. Se continuará la ejecución hasta que se introduzca cualquier cosa que no sea un número positivo.//
 
    function miFuncion(){
        let numero;
        do{
            numero=prompt('Dime un número');
            if(isFinite(numero)&&numero>0){
                miArray.push(numero);
                salirDelBucle = true;
            }else{
                alert('deja de trolear y dime un numero')
            }
        }while(!salirDelBucle);
        for(let num of miArray){
            suma+=num;
        }
        alert('El array es ' +miArray+ ' y la suma es ' +suma);       
    }
