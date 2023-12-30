var x;
x=$(document);
x.ready(inicializarEventos);
function inicializarEventos()
{
var x;
x=$(".enlace"); //clase a la que pertenecen los enlaces del primer menu
x.click(function(event) {
  
   event.preventDefault(); //deasctivamos el evento para que el navegador cargue la url asociada al href del enlace. 
   var contenedorCentral
   contenedorCentral=$("#enlace"); // columna1 es el ID que hemos dado al DIV de la primera columna
   contenedorCentral.load($(this).attr("href"));
  
})}



