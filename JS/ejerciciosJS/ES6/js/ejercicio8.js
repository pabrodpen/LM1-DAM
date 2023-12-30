let n=10;
let nAleatorio=(n)=>{
    return (Math.trunc(Math.random()*n));
}
//la asignamos a una constante para poder llamarla simplemente con la variable
const numAleatorio=nAleatorio(n);
document.write(`Numero aleatorio:${numAleatorio}`);

/*FORMULA MATH.RANDOM INTERVALO

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

*/
