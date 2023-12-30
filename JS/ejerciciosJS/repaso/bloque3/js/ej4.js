let concatenar=()=>{
    let nombre=document.getElementById("nombre").value;//IMP EL VALUE YA QUE DESPUES LO USO EN EL CONCATENAR
    let apellido=document.getElementById("apellido").value;
    let resultado=document.getElementById("resultado");
    resultado.value=`Tu nombre es ${nombre} ${apellido}`;
}