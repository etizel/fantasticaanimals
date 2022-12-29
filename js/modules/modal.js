export default function initModal() {}

const botaoAbrir = document.querySelector('[data-modal = "abrir"]');
const botaoFechar = document.querySelector('[data-modal = "fechar"]');
const containerModal = document.querySelector('[data-modal = "container"]');

function abrirModal(event) {
  event.preventDefault();
  containerModal.classList.add('active')
}

function fecharModal() {
  containerModal.classList.remove('active');
}

function clickFora(event) {
  fecharModal();
}

botaoAbrir.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fecharModal);
containerModal.addEventListener('click', clickFora)