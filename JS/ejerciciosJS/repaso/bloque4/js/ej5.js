let numAleatorio=()=>{
    let n=Math.random()*2;
    n=parseInt(n);
    return n;
}

let enlaces=(numero)=>{
    if(numero==0){
        window.location='https://www.google.es/';
    }else if(numero==1){
        window.location='https://www.youtube.com/';
    }else{
        window.location='https://es-es.facebook.com/';
    }
}

let aleatorio=numAleatorio();

let e=enlaces(aleatorio);