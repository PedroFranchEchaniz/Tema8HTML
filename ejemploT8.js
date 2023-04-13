//function buscarEnlaces(){
    //let enlace = document.getElementById('Colegio');
    //let enlace = document.querySelector('#Colegio');
    //alert(enlace.href);


    //let parrafos = document.querySelectorAll('a+p');
    //for(let parr of parrafos){
      //  alert(parr.innerHTML);
    //}

    //let enlaces = document.querySelectorAll('a'); //acede al siguiente elemento despues de un enalce
    //for(let enlace of enlaces){
      //  enlace.nextElementSibling.innerHTML = "hola hola"

        //let siguienteParafo = enlace.nextElementSibling; //coje el siguiente elemento "hermano" del enlace del harray
        //let primerHijodelParafo = siguienteParafo.firstChild; //coje el primer hijo del elemento, es decir esta dentro de este
        
    //}
//}

//buscarEnlaces();

let boton = document.getElementById('boton');
boton.addEventListener('click', crearParrafo);
let indice = 1;

function crearParrafo(){
  let parrafonuevo = document.createElement('p');
  let contenido = prompt ("Introduce el contenido del párrafo");
  parrafonuevo.innerHTML = contenido;

  let elbody = document.querySelector('body');
  elbody.append(parrafonuevo);

  document.body.append(parrafonuevo);
}

function crearAlumno(){
  let ultimaFila = document.querySelector('tr:last-child');
  let nuevaFila = ultimaFila.cloneNode(true);
  nuevaFila.firstElementChild.innerHTML = prompt('Indique el nombre del alumno');
  nuevaFila.lastElementChild.innerHTML = ++indice;

  document.querySelector('table').append(nuevaFila);
}
/*crearParrafo(prompt("Introduce el contenido del párrafo"));*/

