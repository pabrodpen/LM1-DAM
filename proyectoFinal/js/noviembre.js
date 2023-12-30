// Generar el calendario de noviembre
const novemberDaysElement = document.querySelector('.november .days');
const novemberDaysInMonth = new Date(2023, 11, 0).getDate(); // 5: junio
const novemberFirstDayOfMonth = new Date(2023, 10, 1).getDay(); // 1: lunes

const novemberData = [
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
  { url: 'https://imd.sevilla.org/eventos/carrera-de-orientacion-familiar-parque-amate', tooltip: 'Carrera de Orientación Familiar Parque Amate' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'https://imd.sevilla.org/@@search?advanced_search=True&review_state=published&amp;start.query:record:list:date=2023-11-16+23%3A59%3A59&start.range:record=max&end.query:record:list:date=2023-11-16+00%3A00%3A00&end.range:record=min&list:&Type=Event&amp;', tooltip: 'Olimpiada Escolar Distrito Norte' },
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
  { url: 'http://example.com/2023/05/02', tooltip: '' },
];

for (let i = 1; i <= novemberDaysInMonth; i++) {
  const dayElement = document.createElement('div');
  dayElement.innerText = i;
  dayElement.addEventListener('click', () => {
    const url = novemberData[i - 1].url;
    window.location.href = url;
  });


   // Agregar clase "has-tooltip" si el tooltip no está vacío
   if (novemberData[i - 1].tooltip !== '') {
    dayElement.classList.add('has-tooltip');
  }


  novemberDaysElement.appendChild(dayElement);
}


// Agregar tooltips a los días del calendario de noviembre
const novemberDaysElements = document.querySelectorAll('.november .days > div');
novemberDaysElements.forEach((dayElement, index) => {
  const { tooltip } = novemberData[index];
  dayElement.setAttribute('data-toggle', 'tooltip');
  dayElement.setAttribute('title', tooltip);
});


// Inicializar los tooltips utilizando el método tooltip() de Bootstrap
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });