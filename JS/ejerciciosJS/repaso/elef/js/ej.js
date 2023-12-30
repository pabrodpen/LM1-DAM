let precios=()=>{
    let precioTotal=0;

    let p=document.getElementById("procesador");

    let opcionP=p.options[p.selectedIndex].value;

    opcionP=='intel'? precioTotal+=250:precioTotal+=230;//aqui si que tiene que haber comillas


    let m=document.getElementById("memoria");

    let opcionM=m.options[m.selectedIndex].value;

    if(opcionM=='2'){//da igual que este entre comillas o no
        precioTotal+=90;
    }else if(opcionM=='4'){
        precioTotal+=145;
    }else{
        precioTotal+=210;
    }


    document.getElementById("grabador").checked? precioTotal+=190:precioTotal+=0;//si hago por id le tengo que poner el id
    document.getElementById("grafica").checked? precioTotal+=430:precioTotal+=0;
    document.getElementById("monitor").checked? precioTotal+=185:precioTotal+=0;

    opcionP=='amd'? document.getElementById("grafica").disabled=true:document.getElementById("grafica").disabled=false;
    opcionP=='amd'? document.getElementById("grafica").checked=false:null;
    

    document.getElementById("resultado").textContent=`El precio total es ${precioTotal}`;
}