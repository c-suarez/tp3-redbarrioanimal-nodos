// Probador de recorridos y gestión de tema (Dark / Light Mode)
const $ = (s) => document.querySelector(s);

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

const currentTheme = getInitialTheme();
htmlEl.setAttribute('data-theme', currentTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const activeTheme = htmlEl.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

function run1() {
  const a1 = $('#a1').checked;
  const a2 = $('#a2').checked;
  const a3 = $('#a3').checked;
  const a4 = $('#a4').checked;
  const count = [a1, a2, a3, a4].filter(Boolean).length;
  const out1 = $('#o1');

  if (count === 0) {
    out1.className = 'out result-idle';
    out1.textContent = 'En espera: selecciona las condiciones del caso para evaluar la regla agéntica.';
    return;
  }

  const c = {
    '¿la donación fue confirmada?': a1,
    '¿el donante autorizó novedades?': a2,
    '¿hay una actualización de impacto disponible?': a3,
    '¿falta enviarla a ese donante?': a4
  };

  const miss = Object.keys(c).filter(k => !c[k]);

  if (miss.length === 0) {
    out1.className = 'out result-success';
    out1.textContent = 'Se cumplen las 4 condiciones (Y) → el agente solicita enviar la actualización de impacto.';
  } else {
    out1.className = 'out result-warning';
    out1.textContent = 'No se cumple: ' + miss.join(' · ') + ' → no se solicita el envío (supuesto del grupo: se registra el motivo).';
  }
}

function run2() {
  const dup = $('#b1').checked;
  const dif = $('#b2').checked;
  const out2 = $('#o2');

  if (!dup && !dif) {
    out2.className = 'out result-idle';
    out2.textContent = 'En espera: selecciona si se informa alguna incidencia para evaluar la regla agéntica.';
    return;
  }

  out2.className = 'out result-success';
  out2.textContent = 'Se informa ' + [dup && 'cobro duplicado', dif && 'diferencia de importe'].filter(Boolean).join(' y ') + ' → se registra el reclamo y se deriva a una persona. Sin otro cobro ni reintegro automático.';
}

document.querySelectorAll('#a1,#a2,#a3,#a4').forEach(e => e.addEventListener('change', run1));
document.querySelectorAll('#b1,#b2').forEach(e => e.addEventListener('change', run2));

run1();
run2();
