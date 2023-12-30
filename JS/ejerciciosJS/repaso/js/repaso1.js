
let comprobarNum=(n)=>{
   return (n>0 && n<=5)? true : false;
}

function cargaNumeros(){
    let n;
    do{
        n=prompt('Longitud: ');
        
    }while(!comprobarNum(n));
    let valores=new Array(n);

        for(let i=0;i<n;i++){
            valores[i]=parseInt(prompt('Dime un numero:'));
        }
        return valores;
}

function incremento(valores){
    let resultado=new Array(valores.length);
    for(let i=0;i<valores.length;i++){
        resultado[i]=valores[i]+1;
    }
    return resultado;
}


let array=cargaNumeros();

document.write(incremento(array));




