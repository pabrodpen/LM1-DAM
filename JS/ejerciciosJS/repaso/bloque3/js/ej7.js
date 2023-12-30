let deportes=()=>{

    let res='';

    document.getElementById("futbol").checked? res+=`futbol, `:null;
    document.getElementById("basket").checked? res+=`basket, `:null;
    document.getElementById("tenis").checked? res+=`tenis, `:null;

    document.getElementById("resultado").textContent=`Has elegido los deportes ${res}`;
}