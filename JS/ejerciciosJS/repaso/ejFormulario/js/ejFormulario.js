let numCorr=0,numIncorr=0;//LO PONEMOS AQUI PARA QUE SE VAYAN GUARDANDO LOS VALORES DE RESPUESTAS CORRECTAS
//E INCORRECTAS

let acierto=()=>{
  let p=document.getElementById("pregunta");
  let opcion=p.options[p.selectedIndex].value;

  let res=document.getElementById("resultado");
  opcion==2? res.textContent='Has acertado!':res.textContent='Respuesta incorrecta';
  
}

let numRespuestas=()=>{
  let p=document.getElementById("pregunta");
  let opcion=p.options[p.selectedIndex].value;
  let resp=document.getElementById("respuestas");
 
  
  opcion==2? numCorr++:numIncorr++;
  
  resp.textContent=`Respuestas correctas: ${numCorr}\nRespuestas incorrectas ${numIncorr}`;

}

let limpiarTxtRespuestas=()=>{
  let resp=document.getElementById("respuestas");
  resp.textContent='';
}