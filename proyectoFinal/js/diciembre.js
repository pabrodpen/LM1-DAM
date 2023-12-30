// Generar el calendario de diciembre
const decemberDaysElement = document.querySelector('.december .days');
const decemberDaysInMonth = new Date(2023, 12, 0).getDate(); // 5: junio
const decmberFirstDayOfMonth = new Date(2023, 11, 1).getDay(); // 1: lunes

const decemberData = [
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
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-12-11+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-12-11+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Olimpiada Escolar Navideña Distrito Casco Antiguo' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-12-16+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-12-16+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Abierto Internacional de Andalucía de Remo' },
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
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-12-31+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-12-31+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Carrera San Silvestre Sevillana' },
];

for (let i = 1; i <= decemberDaysInMonth; i++) {
  const dayElement = document.createElement('div');
  dayElement.innerText = i;
  dayElement.addEventListener('click', () => {
    const url = decemberData[i - 1].url;
    window.location.href = url;
  });

   // Agregar clase "has-tooltip" si el tooltip no está vacío
   if (decemberData[i - 1].tooltip !== '') {
    dayElement.classList.add('has-tooltip');
  }


  decemberDaysElement.appendChild(dayElement);
}


// Agregar tooltips a los días del calendario de diciembre
const decemberDaysElements = document.querySelectorAll('.december .days > div');
decemberDaysElements.forEach((dayElement, index) => {
  const { tooltip } = decemberData[index];
  dayElement.setAttribute('data-toggle', 'tooltip');
  dayElement.setAttribute('title', tooltip);
});


// Inicializar los tooltips utilizando el método tooltip() de Bootstrap
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });