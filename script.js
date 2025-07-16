// Clave para localStorage
const STORAGE_KEY = 'quimfarm_cursadas';

// Cargar estado guardado (array de códigos)
const guardadas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

// Al inicio, marcar las que estaban cursadas
function inicializar() {
  document.querySelectorAll('.materia').forEach(el => {
    if (guardadas.includes(el.dataset.code)) {
      el.classList.add('cursada');
    }
    // Asigno el evento de clic
    el.addEventListener('click', () => toggleCursada(el));
  });
}

// Cambia el estado y lo persiste
function toggleCursada(el) {
  const code = el.dataset.code;
  el.classList.toggle('cursada');

  const idx = guardadas.indexOf(code);
  if (idx > -1) {
    // ya estaba, lo quitamos
    guardadas.splice(idx, 1);
  } else {
    // no estaba, lo agregamos
    guardadas.push(code);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(guardadas));
}

// DOM listo → inicializamos
document.addEventListener('DOMContentLoaded', inicializar);
