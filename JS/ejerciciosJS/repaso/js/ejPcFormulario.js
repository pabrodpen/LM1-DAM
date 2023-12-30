let calcularPrecio=()=>{
    let precioTotal=0;
    let precioProcesador=document.getElementById("procesador");
    let opcionProcesador=precioProcesador.options[precioProcesador.selectedIndex].value;

    opcionProcesador=='intel'? precioTotal+=250:precioTotal+=230;

    let precioMemoria=document.getElementById("memoria");
    let opcionMemoria=precioMemoria.options[precioMemoria.selectedIndex].value;

    if(opcionMemoria==2){
        precioTotal+=90;
    }else if(opcionMemoria==4){
        precioTotal+=145;
    }else{
        precioTotal+=210;
    }



    document.getElementById("grabador").checked? precioTotal+=190:precioTotal+=0;
    document.getElementById("grafica").checked? precioTotal+=430:precioTotal+=0;
    document.getElementById("monitor").checked? precioTotal+=185:precioTotal+=0;


    //alert(`Precio total del PC: ${precioTotal}`);-->quitamos el alert

    opcionProcesador=='amd'? document.getElementById("grafica").disabled=true:document.getElementById("grafica").disabled=false;

    opcionProcesador=='amd'? document.getElementById("grafica").checked=false:null;

    document.getElementById("precioTotal").textContent=`El precio total es ${precioTotal}`;


}