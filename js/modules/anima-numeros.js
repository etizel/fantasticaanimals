export default class AnimaNumeros {
  constructor(numeros, observerTarget, activeObserver) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.activeObserver = activeObserver;
  }

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

  animaNumeros() {
    const numeros = document.querySelectorAll();
    numeros.forEach((numero) => {
      this.animaAsync(numero);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.activeObserver)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

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
