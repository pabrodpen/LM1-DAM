let cargarVector=()=>{
    let n=prompt('Dime la longitud:');
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=prompt('Dime una palabra:');
    }
    return arr;
}


let numPalabras=(v)=>{
    let resultado=v.map(function(elemento){
        return elemento.length;
    });
    
    return resultado;
}

let posiciones=(r)=>{
    let res=r.map(function(elemento){
        return `La posicion ${r.indexOf(elemento)+1} tiene ${elemento} letras`;
    });

    return res;
}

let vector=cargarVector();

let longitudVector=numPalabras(vector);

let posicionesVector=posiciones(longitudVector);

document.write(`Resultado final: ${posicionesVector}`);