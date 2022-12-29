export default function initModal() {}

const botaoAbrir = document.querySelector('[data-modal = "abrir"]');
const botaoFechar = document.querySelector('[data-modal = "fechar"]');
const containerModal = document.querySelector('[data-modal = "container"]');

function abrirModal(event) {
  event.preventDefault;
  console.log(event);
}

function fecharModal() {}

botaoAbrir.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fecharModal);
