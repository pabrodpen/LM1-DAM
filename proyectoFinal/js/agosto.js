// Generar el calendario de agosto
const augustDaysElement = document.querySelector('.august .days');
const augustDaysInMonth = new Date(2023, 8, 0).getDate(); // 5: junio
const augustFirstDayOfMonth = new Date(2023, 7, 1).getDay(); // 1: lunes

const augustData = [
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
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
  { url: 'https://www.google.es/', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-8-27+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-8-27+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Torneo Internacional de Petanca Ciudad de Sevilla' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
];

for (let i = 1; i <= augustDaysInMonth; i++) {
  const dayElement = document.createElement('div');
  dayElement.innerText = i;
  dayElement.addEventListener('click', () => {
    const url = augustData[i - 1].url;
    window.location.href = url;
  });


   // Agregar clase "has-tooltip" si el tooltip no está vacío
   if (augustData[i - 1].tooltip !== '') {
    dayElement.classList.add('has-tooltip');
  }


  augustDaysElement.appendChild(dayElement);
}


// Agregar tooltips a los días del calendario de agosto
const augustDaysElements = document.querySelectorAll('.august .days > div');
augustDaysElements.forEach((dayElement, index) => {
  const { tooltip } = augustData[index];
  dayElement.setAttribute('data-toggle', 'tooltip');
  dayElement.setAttribute('title', tooltip);
});


// Inicializar los tooltips utilizando el método tooltip() de Bootstrap
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });