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

const materials=[
    'Hydrogen','Helium','Lithium','Beryllium'
];

let longitudVector=numPalabras(materials);

let posicionesVector=posiciones(longitudVector);

document.write(`Resultado final: ${posicionesVector}`);