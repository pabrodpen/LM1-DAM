let cargarVector=(longitud)=>{
    let v=new Array(longitud);
    for(let i=0;i<longitud;i++){
        v[i]=prompt('Dime un numero:');
    }
    return v;
}

let incrementoVector=(v)=>{
    let resultado=v.map(function (elemento){
        return parseInt(elemento)+1;
    });

    return resultado;
}

let n=prompt('Dime la longitud del vector:');
let arr=cargarVector(n);


let incremento=incrementoVector(arr);

document.write(`Vector: ${arr}`);
document.write('<br>');
document.write(`Vector incrementado: ${incremento}`);