export default function initFetchAnimals() {}

async function fetchAnimals(url) {
  const dataInitial = await fetch(url);
  const resultJSON = await dataInitial.json();
  resultJSON.forEach((animal) => {
    createAnimal(animal);
  });
}

function createAnimal(animal) {
  console.log(animal);
}

fetchAnimals('./animalsapi.json');
