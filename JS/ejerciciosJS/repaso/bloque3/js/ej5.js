let precioPizza=()=>{
    let p=document.getElementById("pizza");
   
    let opcion=p.options[p.selectedIndex].text;
    //COGEMOS EL TEXT, ES DECIR RECONOCE LA OPCION QUE ES CON EL TEXTO QUE HAY ENTRE <OPTION></OPTION>
   

   if(opcion=='Jamon y queso'){
    precio=10;
   }else if(opcion=='Mozzarella'){
    precio=9;
   }else if(opcion=='Morrones'){
    precio=12;
   }

   document.getElementById("precio").value=`El precio de la pizza es ${precio}`;
   
    
}