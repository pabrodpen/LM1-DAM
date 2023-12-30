// Generar el calendario de octubre
const octoberDaysElement = document.querySelector('.october .days');
const octoberDaysInMonth = new Date(2023, 10, 0).getDate(); // 5: junio
const octoberFirstDayOfMonth = new Date(2023, 9, 1).getDay(); // 1: lunes

const octoberData = [
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'https://www.google.es/', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'https://www.carreradelamujer.com/muj-sevilla', tooltip: 'Carrera de la Mujer Sevilla' },
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
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-10-19+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-10-19+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Deporte Saludable para Mayores Distrito Cerro Amate' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-10-21+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-10-21+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Open Nacional de Kickboxing y Muai Thai' },
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-10-22+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-10-22+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Carrera Popular Casco Antiguo CaixaBank #Sevilla10' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
];

for (let i = 1; i <= octoberDaysInMonth; i++) {
  const dayElement = document.createElement('div');
  dayElement.innerText = i;
  dayElement.addEventListener('click', () => {
    const url = octoberData[i - 1].url;
    window.location.href = url;
  });

   // Agregar clase "has-tooltip" si el tooltip no está vacío
   if (octoberData[i - 1].tooltip !== '') {
    dayElement.classList.add('has-tooltip');
  }


  octoberDaysElement.appendChild(dayElement);
}


// Agregar tooltips a los días del calendario de octubre
const octoberDaysElements = document.querySelectorAll('.october .days > div');
octoberDaysElements.forEach((dayElement, index) => {
  const { tooltip } = octoberData[index];
  dayElement.setAttribute('data-toggle', 'tooltip');
  dayElement.setAttribute('title', tooltip);
});


// Inicializar los tooltips utilizando el método tooltip() de Bootstrap
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });