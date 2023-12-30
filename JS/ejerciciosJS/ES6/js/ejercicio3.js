let sueldo=parseFloat(prompt('Sueldo',''));
let descuento=(sueldo)=>{
    return sueldo>10000? sueldo*0.9 : sueldo*0.95;
}

document.write(`Sueldo actualizado:${descuento(sueldo)}`);