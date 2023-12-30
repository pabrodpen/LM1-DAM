/*SUBMENU*/
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  
  
    return false;
  });

/*FUNCIONES2*/
var x;
x=$(document);
x.ready(inicializarEventos);
function inicializarEventos()
{
var x;
x=$(".enlace"); //clase a la que pertenecen los enlaces del primer menu
x.click(function(event) {
  
   event.preventDefault(); //desactivamos el evento para que el navegador cargue la url asociada al href del enlace. 
   var contenedorCentral
   contenedorCentral=$("#enlace"); // columna1 es el ID que hemos dado al DIV de la primera columna
   contenedorCentral.load($(this).attr("href"));
  
})}


/*RECETAS*/
function cargarPagina(url) {
  $.ajax({
    url: url,
    dataType: 'html',
    success: function(response) {
      $('#contenido').html(response);
    },
    error: function(xhr, status, error) {
      console.log(error);
    }
  });
}

/*SCROLLSPY*/
$('body').scrollspy({target: ".navbar"})

/*POPOVERS*/
$(function () {
  $('[data-toggle="popover"]').popover({
    html: true
  });
});