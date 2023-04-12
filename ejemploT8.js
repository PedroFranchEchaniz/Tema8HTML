function buscarEnlaces(){
    //let enlace = document.getElementById('Colegio');
    //let enlace = document.querySelector('#Colegio');
    //alert(enlace.href);


    //let parrafos = document.querySelectorAll('a+p');
    //for(let parr of parrafos){
      //  alert(parr.innerHTML);
    //}

    let enlaces = document.querySelectorAll('a'); //acede al siguiente elemento despues de un enalce
    for(let enlace of enlaces){
        enlace.nextElementSibling.innerHTML = "hola hola"

        let siguienteParafo = enlace.nextElementSibling; //coje el siguiente elemento "hermano" del enlace del harray
        let primerHijodelParafo = siguienteParafo.firstChild; //coje el primer hijo del elemento, es decir esta dentro de este
        
    }
}

//buscarEnlaces();

function crearParafo(contenido){
  let parrafonuevo = document.createElement('p');
  parrafonuevo.innerHTML = contenido;

  /*let elbody = document.querySelector('body');
  elbody.append(parrafonuevo);*/

  document.body.append(parrafonuevo);
}

crearParafo(prompt("Introduce el contenido del párrafo"));