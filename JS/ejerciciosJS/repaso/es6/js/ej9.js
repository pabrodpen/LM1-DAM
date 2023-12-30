/*"Mostrar una lista HTML que se debe crear en forma dinámica inmediatamente luego que se carga la página" 
significa que debes generar y mostrar una lista en tu página HTML utilizando JavaScript tan pronto como la 
página se cargue en el navegador.


innerHTML se utiliza para insertar contenido HTML dinámicamente en el elemento con el id "resultado" en el archivo HTML.

Primero, se crea un Map llamado paises que contiene pares clave-valor de países y población.

Luego, se declara una variable cadena que se utiliza para construir una cadena de texto en formato HTML. 
Dentro del bucle for...of, se recorren los elementos del Map y se construye una cadena de texto que contiene la 
información del país y su población en un formato de celda de tabla (<td>).

Finalmente, se selecciona el elemento con el id "resultado" utilizando document.getElementById("resultado") y 
se asigna la cadena de texto a su propiedad innerHTML. Esto hace que el contenido HTML generado dinámicamente 
se inserte dentro del elemento <p> con el id "resultado".


"dinámicamente" se refiere a que en lugar de tener un contenido estático y fijo en la página HTML, 
se puede generar o modificar el contenido utilizando código JavaScript mientras la página se está ejecutando 
en el navegador.

*/
const paises=new Map();

paises.set('España',12000);
paises.set('Francia',10000);
paises.set('Alemania',5000);


let cadena='';
    for(let [pais,poblacion] of paises){
        cadena+=`<td>${pais}, ${poblacion}</td>`;
    }

document.getElementById("resultado").innerHTML=cadena;


