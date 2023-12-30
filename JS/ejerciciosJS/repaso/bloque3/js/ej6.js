let precioPizza=()=>{
    let p=document.getElementById("pizza");
    let opcion=p.options[p.selectedIndex].text;

    let precio;

    if(opcion=='Queso 4$'){
        precio=4;
    }else if(opcion=='Jamon y queso 6$'){
        precio=6;
    }else if(opcion=='Especial 10$'){
        precio=10;
    }

    let n=parseInt(document.getElementById("numero").value);

    document.getElementById("precio").value=`El precio de la pizza es:${precio*n}`;
}