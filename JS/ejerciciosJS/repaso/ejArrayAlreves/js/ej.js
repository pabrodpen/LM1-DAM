let cargarVector1=()=>{
    let n=prompt('Dime la longitud del vector:');
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=prompt(`Dime un numero para el primer vector:`);
    }
    return arr;
}


let cargarVector2=(arr1)=>{
    let arr2=new Array(arr1.length);
    for(let i=0;i<arr1.length;i++){
        arr2[i]=prompt('Dime un numero para el segundo vector:');
    }
    return arr2;
}

let suma=(v1,v2)=>{
    let j=v2.length-1;
    let resultado=new Array(v1.length);
    for(let i=0;i<v1.length;i++){
       resultado[i]=parseInt(v1[i])+parseInt(v2[j]);
       j--;
    }
    return resultado;
}


let vector1=cargarVector1();

document.write(`VECTOR 1: ${vector1}`);
document.write('<br>');

let vector2=cargarVector2(vector1);
document.write(`VECTOR 2: ${vector2}`);
document.write('<br>');

let resultado=suma(vector1,vector2);
document.write(`VECTOR RESULTADO: ${resultado}`);
document.write('<br>');