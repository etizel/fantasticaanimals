export default class AnimaNumeros {
  constructor(numeros, observerTarget, activeObserver) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.activeObserver = activeObserver;

    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um element do dom, com número em seu texto.
  // incrementa a partir de 0 até thefinalNumber
  static animaAsync(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar número, para cada número selecionado
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.animaAsync(numero);
    });
  }

  // função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.activeObserver)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiona o MutationOberserver para verificar quando a classe ativo é adicionada
  addObserverEvent() {
    this.observer = new MutationObserver(this.handleMutation.bind(this));
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros && this.observerTarget) {
      this.addObserverEvent();
    }
    return this;
  }
}
