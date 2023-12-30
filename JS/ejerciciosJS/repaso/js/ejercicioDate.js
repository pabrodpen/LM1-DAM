
function escribeMes(n){
   
    do {
        switch (n) {
            case 0:
                resultado='enero';
                break;
            case 1:
                resultado='febrero';
                break;
            case 2:
                resultado='marzo';
                break;
            case 3:
                resultado='abril';
                break;
            case 4:
                resultado='mayo';
                break;
            case 5:
                resultado='junio';
                break;
            case 6:
                resultado='julio';
                break;
            case 7:
                resultado='agosto';
                break;
            case 8:
                resultado='septiembre';
                break;
            case 9:
                resultado='octubre';
                break;
            case 10:
                resultado='noviembre';
                break;
            case 11:
                resultado='diciembre';
                break;
        
        }
    } while (!(n>=0 && n<=12));
    
    return resultado;
}


let f=prompt('Dime una fecha(yyyy-mm-dd):');
let fecha=new Date(f);

let mes=fecha.getMonth();
document.write(escribeMes(mes));
