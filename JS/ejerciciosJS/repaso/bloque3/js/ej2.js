let cargarString=()=>{
    let cadena=prompt("Escribe algo:");
    return cadena;
}

let primeraMitad=(cadena)=>{
    let subcadena;
    subcadena=cadena.substring(0,cadena.length/2);
    return subcadena;
}

let ultimoCaracter=(cadena)=>{
    let ultimo;
    ultimo=cadena.charAt(cadena.length-1);
    return ultimo;
}

let formaInversa=(cadena)=>{
    let reves='';//inicializar
    for(let i=cadena.length-1;i>=0;i--){
        reves+=cadena[i];
    }
    return reves;
}

let conGuion=(cadena)=>{
    let guion='';//nicializar
    for(caracter of cadena){
        guion+=`${caracter}-`;
    }
    return guion;
}

let numVocales=(cadena)=>{
    let num=0;
    for(caracter of cadena){
        caracter=='a'|| caracter=='e' || caracter=='i' ||
        caracter=='o' || caracter=='u' ? num++:null;
    }
    return num;
}

let frase=cargarString();
document.write(`Cadena:${frase}`);
document.write('<br>');
let mitad=primeraMitad(frase);
document.write(`Mitad de la frase:${mitad}`);
document.write('<br>');
let ultimo=ultimoCaracter(frase);
document.write(`Ultimo caracter:${ultimo}`);
document.write('<br>');
let reves=formaInversa(frase);
document.write(`Frase del reves:${reves}`);
document.write('<br>');
let guion=conGuion(frase);
document.write(`Frase con guiones:${guion}`);//no hace falta igualarlo a nada, ya que no devuelve nada, solo muestra
document.write('<br>');
let vocales=numVocales(frase);
document.write(`Numero de vocales:${vocales}`);