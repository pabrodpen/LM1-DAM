const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
    ];

let contPalabras=(materials)=>{
    let numLetras=materials.map(function(element){
        return element.length;//es element.length, no materials[i].length
    })

    return numLetras;
}


let mostrarResultados=(contPalabras)=>{
    let palabras=contPalabras(materials);
    for(let [indice,valor] of palabras.entries()){
        document.write(`La palabra en la posicion ${indice} tiene ${valor} letras`);//no hace falta poner palabra.indice
        document.write('<br>');
    }
}

//IMP LLAMAR AL METODO
mostrarResultados(contPalabras);

