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
for(let i=0;i<articulos.length;i++){
    document.write(`Nombre: ${articulos[i].nombre}, precio:${articulos[i].precio}`);
    document.write('<br>');
}
document.write('<br>');
document.write('<br>');
document.write('<br>');
for(articulo of articulos){
    articulo.precio>30? document.write(articulo.precio) : document.write('');
    document.write('<br>');
}