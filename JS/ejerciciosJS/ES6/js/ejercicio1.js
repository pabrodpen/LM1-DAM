const vengadores = [
    { nombre: "Tony", apellidos: "Stark" },
    { nombre: "Steve", apellidos: "Rogers" },
    { nombre: "Bruce", apellidos: "Banner" },
    { nombre: "Natasha", apellidos: "Romanoff" },
    { nombre: "Thor", apellidos: "Odinson" },
    { nombre: "Clint", apellidos: "Barton" },
    ];
    

   let arrayString=vengadores.map(function(element){
    return `${element.nombre} ${element.apellidos}`;
   })

   document.write(`Array separado: ${arrayString}`);