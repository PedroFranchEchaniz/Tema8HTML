function buscarEnlaces(){
    //let enlace = document.getElementById('Colegio');
    let enlace = document.querySelector('#Colegio');
    alert(enlace.href);


    let parrafos = document.querySelectorAll('a+p');
    for(let parr of parrafos){
        alert(parr.innerHTML);
    }
}

buscarEnlaces();