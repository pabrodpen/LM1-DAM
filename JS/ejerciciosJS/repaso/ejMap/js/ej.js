

const traducciones= new Map([
    ["casa","house"],
    ["perro","dog"],
    ["mesa","desk"]
]);


let traductor=(m)=>{
    let palCast=prompt('Dime una palabra en castellano:');

    return m.has(palCast)? `La traduccion de ${palCast} es ${m.get(palCast)}`:`La palabra 
    ${palCast} no existe en el traductor`;

    
}



document.write(traductor(traducciones));
