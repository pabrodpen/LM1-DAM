const paises=new Map([
    ["España",133838],
    ["Alemania",283383],
    ["Francia",229383],
    ["Italia",2828282]
]);

let cadena="";
for(let [pais,cantidad]of paises){
    //vamos añadiendo las listas a la cadena
    cadena+=`<li>${pais} ${cantidad}</li>`;
}
//obtenemos la referencia del js al html de la siguiente manera
const elemHTML=document.getElementById("paises");


/*La propiedad innerHTMLen JavaScript permite acceder o modificar el contenido HTML de un elemento.

Cuando se accede a innerHTML un elemento, se obtiene una representación en forma de cadena de texto de todo el 
contenido HTML que está contenido dentro del elemento, incluyendo las etiquetas y el texto.*/

elemHTML.innerHTML=cadena;

