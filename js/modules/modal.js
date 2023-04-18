export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.activeClass = 'ativo';
  }

  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle(this.activeClass);
  }

  cliqueForaModal(event) {
    if (event.target === this) {
      this.toggleModal(event);
    }
  }

  addEventModal() {
    this.botaoAbrir.addEventListener('click', this.toggleModal);
    this.botaoFechar.addEventListener('click', this.toggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventModal();
    }
  }
}
