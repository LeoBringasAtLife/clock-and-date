const DAYS = [
  "Domingo", "Lunes", "Martes",
  "Miércoles", "Jueves", "Viernes", "Sábado"
];

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Cache de referencias DOM para mejor rendimiento
const clockElement = document.getElementById("clock");
const dateElement = document.getElementById("date");

/**
 * @param {Date} Objeto de fecha
 * @returns {string} Hora formateada
*/

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function setClockAndDate() {
  const date = new Date();

  // Obtener componentes de la fecha
  const clock = formatTime(date);
  const dayOfWeek = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayNumber = date.getDate();

  // Actualizar reloj usando textContent (seguro y eficiente)
  clockElement.textContent = clock;
  dateElement.textContent = `${DAYS[dayOfWeek]}
  ${dayNumber} ${MONTHS[month]} ${year}`;
}

setClockAndDate();
setInterval(setClockAndDate, 1000);
