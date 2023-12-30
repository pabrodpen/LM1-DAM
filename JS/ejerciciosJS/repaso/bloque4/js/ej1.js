let avisos=()=>{

    let clave=document.getElementById("clave").value;
    clave.length<7 && clave.length>0? alert('La contraseña tiene que tener 7 caracteres por lo menos'):null;

    clave.length>20? alert('La contraseña debe ser de menos de 20 caracteres'):null;


    
    //nombre==='' && clave!=''? alert('Ingresa tu nombre'):null;IMP-->PARA COMPROBAR SI ESTA VACIO SE USA ===

}

let pedir=()=>{
    alert('Ingresa tu nombre y una contraseña:');
}

let vaciar=(dato)=>{
    dato.value='';//vaciamos el dato(por defecto el value que tenemos en el text(Nombre:)) cuando pinchemos para poder 
    //escribir lo que queramos
}