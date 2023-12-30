//un vector por teclado
//otro vector que este formado por el anterior pero sumandole 1 a cada elemento
//ul ultimo vector formado por la suma de los 2 anteriores.Mostrarlo

let cargarVector=(n)=>{
    let valores=new Array(n);
    for(let i=0;i<n;i++){
        valores[i]=parseInt(prompt('Dime un numero:'));
    }

    return valores;
}

let incrementarEn1=(valores)=>{
    let array=new Array(valores.length);
    for(let i=0;i<array.length;i++){
        array[i]=valores[i]+1;
    }

    return array;
}

let suma=(valores,array)=>{
    let resultado=new Array(valores.length);
    for(let i=0;i<resultado.length;i++){
        resultado[i]=valores[i]+array[i];
    }
    return resultado;
}

let num=prompt('Dime la longitud:');
let v1=cargarVector(num);

let v2=incrementarEn1(v1);

document.write(suma(v1,v2));