function esPalindromo(str){
    let strEnArray = str.split('');
    let arrayDelReves = strEnArray.reverse();
    let delReves = arrayDelReves.join();

    if(str===delReves){
        alert('es palindromo')
    }else{
        alert('eso no es un palíndromo')
    }
}

esPalindromo(prompt('Dime algo'));