export default function initFuncionamento() {}

const funcionamento = document.querySelector('[data-semana]');
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);

console.log(diasSemana);
