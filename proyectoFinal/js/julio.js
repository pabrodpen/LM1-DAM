// Generar el calendario de julio
const juleDaysElement = document.querySelector('.jule .days');
const juleDaysInMonth = new Date(2023, 6, 0).getDate(); // 5: junio
const juleFirstDayOfMonth = new Date(2023, 6, 1).getDay(); // 1: lunes

const juleData = [
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'https://www.google.es/', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-7-7+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-7-7+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Andalucía Gym Cup de Gimnasia Artística' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-7-16+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-7-16+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Acuatlón Velá de Triana' },
  { url: '', tooltip: '' },
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
];

for (let i = 1; i <= juleDaysInMonth; i++) {
  const dayElement = document.createElement('div');
  dayElement.innerText = i;
  dayElement.addEventListener('click', () => {
    const url = juleData[i - 1].url;
    window.location.href = url;
  });


   // Agregar clase "has-tooltip" si el tooltip no está vacío
   if (juleData[i - 1].tooltip !== '') {
    dayElement.classList.add('has-tooltip');
  }


  juleDaysElement.appendChild(dayElement);
}


// Agregar tooltips a los días del calendario de julio
const juleDaysElements = document.querySelectorAll('.jule .days > div');
juleDaysElements.forEach((dayElement, index) => {
  const { tooltip } = juleData[index];
  dayElement.setAttribute('data-toggle', 'tooltip');
  dayElement.setAttribute('title', tooltip);
});


// Inicializar los tooltips utilizando el método tooltip() de Bootstrap
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });