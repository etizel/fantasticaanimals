import initNumber from './anima-numeros.js';

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    const dataInitial = await fetch(url);
    const resultJSON = await dataInitial.json();
    const numerosGrid = document.querySelector('.numeros-grid');
    resultJSON.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
    initNumber();
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `<h3>${animal.specie}</h3> <span>${animal.totally}</span>`;
    return div;
  }

  fetchAnimals('./animalsapi.json');
}
