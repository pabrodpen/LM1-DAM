/*HACER QUE ME COLOREE LA FECHA EN LA QUE HAYA UN EVENTO
EXPLICAR QUE HACE CADA COSA*/


// Generar el calendario de mayo

const mayDaysElement = document.querySelector('.may .days');
const mayDaysInMonth = new Date(2023, 4, 0).getDate(); // 4: mayo
const mayFirstDayOfMonth = new Date(2023, 4, 1).getDay(); // 1: lunes

const mayData = [
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: '', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'https://elegirhoy.com/evento/deportes/xii-fiesta-del-ajedrez', tooltip: 'Fiesta del ajedrez' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'https://www.badmintonandalucia.es/evento/campeonato-de-espana-absoluto-y-parabadminton/', tooltip: 'Campeonato de España Absoluto por Equipos de Pádel' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'https://imd.sevilla.org/eventos/campeonato-de-andalucia-de-gimnasia-artistica-trampolin-y-parkour', tooltip: 'Campeonato de Andalucía de Gimnasia Artística, Trampolín y Parkour' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/02', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
  { url: 'http://example.com/2023/05/01', tooltip: '' },
];


for (let i = 1; i <= mayDaysInMonth; i++) {
  const dayElement = document.createElement('div');
  dayElement.innerText = i;
  dayElement.addEventListener('click', () => {
    const url = mayData[i - 1].url;
    window.location.href = url;
  });

  // Agregar clase "has-tooltip" si el tooltip no está vacío
  if (mayData[i - 1].tooltip !== '') {
    dayElement.classList.add('has-tooltip');
  }

  mayDaysElement.appendChild(dayElement);
}


// Agregar tooltips a los días del calendario de mayo
const mayDaysElements = document.querySelectorAll('.may .days > div');
mayDaysElements.forEach((dayElement, index) => {
  const { tooltip } = mayData[index];
  dayElement.setAttribute('data-toggle', 'tooltip');
  dayElement.setAttribute('title', tooltip);
});

// Inicializar los tooltips utilizando el método tooltip() de Bootstrap
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

