let valores=new Array(5);
for(let i=0;i<5;i++){
    valores[i]=parseInt(prompt('Numero:',''));
}

let actArray=(valores)=>{
    let modificado=valores.map(function(element){
        return element+1;
    })

    return modificado;
}

document.write(`Nuevo array:${actArray(valores)}`);