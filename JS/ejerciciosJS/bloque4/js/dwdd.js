function inicio(elemento){
    elemento.value=elemento.id;
}

function avisar(elemento){
    if(elemento.value==''){
        alert('Tienes que rellenar el campo');
    }
}