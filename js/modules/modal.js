export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.activeClass = 'ativo';
  }

  toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle(this.activeClass);
  }

  cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventModal();
    }
  }
  // botaoAbrir.addEventListener('click', toggleModal);
  // botaoFechar.addEventListener('click', toggleModal);
  // containerModal.addEventListener('click', cliqueForaModal);
}
