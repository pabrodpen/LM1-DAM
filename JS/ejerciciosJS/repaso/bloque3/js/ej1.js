let cargarVector=()=>{
    let v=new Array(8);
    for(let i=0;i<v.length;i++){
        v[i]=prompt("Dime un numero:");
    }
    return v;
}

let valorAcumulado=(vector)=>{
    let suma=0;
    for(let elemento of vector){
        suma+=parseInt(elemento);
    }
    return suma;
}

let mayores36=(vector)=>{
    let suma=0;
    for(let elemento of vector){
        elemento>36? suma+=parseInt(elemento):null;
    }
    return suma;
}

let numMayor50=(vector)=>{
    let num=0;
    for(let elemento of vector){
        elemento>50? num++:num;
    }
    return num;
}


let valores=cargarVector();
let sumaTotal=valorAcumulado(valores);
let sumaMayores36=mayores36(valores);
let numerosMayores50=numMayor50(valores);

document.write(`Vector: ${valores}`);
document.write("<br>");
document.write(`Suma total del vector:${sumaTotal}`);
document.write("<br>");
document.write(`Suma total de los valores mayores de 36:${sumaMayores36}`);
document.write("<br>");
document.write(`Cantidad de valores mayores de 50:${numerosMayores50}`);
