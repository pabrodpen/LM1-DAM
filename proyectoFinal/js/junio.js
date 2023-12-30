// Generar el calendario de junio
const juneDaysElement = document.querySelector('.june .days');
const juneDaysInMonth = new Date(2023, 5, 0).getDate(); // 5: junio
const juneFirstDayOfMonth = new Date(2023, 5, 1).getDay(); // 1: lunes

const juneData = [
  { url: 'http://example.com/2023/056/01', tooltip: '' },
  { url: 'http://example.com/2023/06/02', tooltip: '' },
  { url: 'https://imd.sevilla.org/eventos/encuentro-de-yoga', tooltip: 'Encuentro de Yoga' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'https://www.google.es/', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'https://clubnauticosevilla.com/57o-ascenso-internacional-del-rio-guadalquivir/', tooltip: 'Ascenso a Vela del Guadalquivir' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'https://imd.sevilla.org/eventos/fiesta-del-agua-tiro-de-linea-distrito-sur', tooltip: 'Fiesta del Agua Tiro de Línea (Distrito Sur)' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
];


for (let i = 1; i <= juneDaysInMonth; i++) {
  const dayElement = document.createElement('div');
  dayElement.innerText = i;
  dayElement.addEventListener('click', () => {
    const url = juneData[i - 1].url;
    window.location.href = url;
  });

   // Agregar clase "has-tooltip" si el tooltip no está vacío
   if (juneData[i - 1].tooltip !== '') {
    dayElement.classList.add('has-tooltip');
  }


  juneDaysElement.appendChild(dayElement);
}


// Agregar tooltips a los días del calendario de junio
const juneDaysElements = document.querySelectorAll('.june .days > div');
juneDaysElements.forEach((dayElement, index) => {
  const { tooltip } = juneData[index];
  dayElement.setAttribute('data-toggle', 'tooltip');
  dayElement.setAttribute('title', tooltip);
});


// Inicializar los tooltips utilizando el método tooltip() de Bootstrap
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });