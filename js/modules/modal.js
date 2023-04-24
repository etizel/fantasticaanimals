export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.activeClass = 'ativo';

    // bind this referente ao objeto da classe
    this.eventModal = this.eventModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  // adiciona o evento de toggle ao modal
  eventModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this) {
      this.toggleModal(event);
    }
  }

  // adiciona os eventos ao modal
  addEventModal() {
    this.botaoAbrir.addEventListener('click', this.eventModal);
    this.botaoFechar.addEventListener('click', this.eventModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventModal();
    }
  }
}
