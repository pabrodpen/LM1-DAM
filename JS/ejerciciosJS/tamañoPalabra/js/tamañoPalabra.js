let comprobarNum=(n)=>{
    return (n>0 && n<=5)? true:false;
}

function cargaPalabras(){
    let n;
    do {
        n=parseInt(prompt('Longitud: '));
    } while (!comprobarNum(n));

    let palabras=new Array(n);

    for(let i=0;i<palabras.length;i++){
        palabras[i]=prompt('Escribe una palabra:');
    }
    return palabras;
}

function numLetras(palabras){
   
    let numLetras=palabras.map(function(elemento){
        return elemento=parseInt(elemento.length);
    })
    return numLetras;
}

let palabras=cargaPalabras();
document.write(numLetras(palabras));