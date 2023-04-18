export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
  }

  toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  
  init() {

  }
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
