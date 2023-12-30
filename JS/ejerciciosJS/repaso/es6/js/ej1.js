
const imprimirVector=(v)=>{
    let resultado=v.map(function(elemento){
        return `${elemento.nombre} ${elemento.apellidos}`;//no hace falta poner coma-->ya los pone el metodo map
    });
    
    return resultado;
}

const vengadores=[
    {nombre:"Tony",apellidos:"Stark"},
    {nombre:"Steve",apellidos:"Rogers"},
    {nombre:"Bruce",apellidos:"Banner"},
    {nombre:"Natasha",apellidos:"Romanoff"},
    {nombre:"Thor",apellidos:"Odinson"},
    {nombre:"Clint",apellidos:"Barton"},
];

let impreso=imprimirVector(vengadores);

document.write(impreso);