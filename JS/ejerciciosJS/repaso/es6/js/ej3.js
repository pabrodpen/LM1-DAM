let descuentos=(sueldo)=>{
    sueldo>10000? sueldo=sueldo*0.9:sueldo=sueldo*0.95;

    return sueldo;
}

let s=prompt('Dime tu sueldo bruto:');
let resultado=descuentos(s);
document.write(`Tu sueldo con descuento es ${resultado}`);