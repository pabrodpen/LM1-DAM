let precios=(v)=>{
    for(let elemento of v){
        elemento.precio>30? document.write(`${elemento.nombre}`):null;
        document.write('<br>');
    }
}

let imprimirVector=(v)=>{
    for(let elemento of v){//TIENE QUE COINCIIDIR EL NOMBRE DEL VECTOR CON EL DEL PARAMETRO(V)
        document.write(`${elemento.nombre} ${elemento.precio}`);
        document.write('<br>');
    }
}


const articulos = [
    {
    nombre:'sandía',
    precio:12
    },
    {
    nombre:'manzanas',
    precio:52
    },
    {
    nombre:'peras',
    precio:40
    },
    {
    nombre:'naranjas',
    precio:35
    }
    ]


document.write('VECTOR:');
document.write('<br>');
imprimirVector(articulos);


document.write('ARTICULOS SUPERIORES A 30:');
document.write('<br>');
precios(articulos);
