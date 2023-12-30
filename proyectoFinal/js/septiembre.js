// Generar el calendario de septiembre
const septemberDaysElement = document.querySelector('.september .days');
const septemberDaysInMonth = new Date(2023, 9, 0).getDate(); // 5: junio
const septemberFirstDayOfMonth = new Date(2023, 8, 1).getDay(); // 1: lunes

const septemberData = [
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
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-9-16+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-9-16+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Sevilla Roll-Session Skate Plaza de Armas' },
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
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-9-29+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-9-29+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Carrera Nocturna del Guadalquivir' },
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-9-30+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-9-30+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Programa de Senderismo IMD' },
];

for (let i = 1; i <= septemberDaysInMonth; i++) {
  const dayElement = document.createElement('div');
  dayElement.innerText = i;
  dayElement.addEventListener('click', () => {
    const url = septemberData[i - 1].url;
    window.location.href = url;
  });


   // Agregar clase "has-tooltip" si el tooltip no está vacío
   if (septemberData[i - 1].tooltip !== '') {
    dayElement.classList.add('has-tooltip');
  }


  septemberDaysElement.appendChild(dayElement);
}


// Agregar tooltips a los días del calendario de septiembre
const septemberDaysElements = document.querySelectorAll('.september .days > div');
septemberDaysElements.forEach((dayElement, index) => {
  const { tooltip } = septemberData[index];
  dayElement.setAttribute('data-toggle', 'tooltip');
  dayElement.setAttribute('title', tooltip);
});


// Inicializar los tooltips utilizando el método tooltip() de Bootstrap
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });