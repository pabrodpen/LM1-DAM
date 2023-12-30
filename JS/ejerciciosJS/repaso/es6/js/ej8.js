const numAleatorio=(n)=>{
    let resultado=(Math.random()*n)+1;//IMP COMO EL MATH.RANDOM
    return resultado;
}

const resultado1=numAleatorio(10);
document.write(`Numero entre 1 y 10: ${resultado1}`);
document.write('<br>');
const resultado2=numAleatorio(5);
document.write(`Numero entre 1 y 5: ${resultado2}`);
