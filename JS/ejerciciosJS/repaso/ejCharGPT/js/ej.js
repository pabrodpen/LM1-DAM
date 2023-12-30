/*"Desarrolla un programa en JavaScript que permita a los usuarios ingresar una lista de nombres y, al presionar 
un botón, genere dinámicamente una lista HTML con los nombres ingresados. El programa debe tener un campo de entrada 
de texto donde los usuarios puedan escribir los nombres, un botón de agregar y un contenedor donde se mostrará la 
lista generada.

Cuando los usuarios ingresen un nombre y hagan clic en el botón de agregar, el programa debe capturar el 
valor del campo de entrada, generar un nuevo elemento <li> en la lista HTML con el nombre ingresado y agregarlo 
al contenedor. La lista debe actualizarse en tiempo real a medida que se agregan más nombres.*/


let listaDinamica=()=>{
    let nombre='';
    let cadena='';
    while (nombre!='fin'){
        nombre=prompt('Dime un nombre:');

        nombre!='fin'?   cadena+=`<td>${nombre},</td>`:cadena+='';
    }

    document.getElementById("resultado").innerHTML=cadena;
}

listaDinamica();