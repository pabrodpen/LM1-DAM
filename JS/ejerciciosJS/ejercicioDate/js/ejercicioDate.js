
function escribeMes(n){
   
    const meses=new Map([
        [0,"enero"],
        [1,"febrero"],
        [2,"marzo"],
        [3,"abril"],
        [4,"mayo"],
        [5,"junio"],
        [6,"julio"],
        [7,"agosto"],
        [8,"septiembre"],
        [9,"octubre"],
        [10,"noviembre"],
        [11,"diciembre"]
    ]);
    
    return meses.get(n);
}



let fecha=new Date();
let año=fecha.getFullYear();
let mes=fecha.getMonth();
let dia=fecha.getDay();
document.write(`Fecha normal: ${dia} de ${mes} de ${año}`);
document.write('<br>');
document.write(`La fecha con el mes escrito:${dia} de ${escribeMes(mes)} de ${año}`);


