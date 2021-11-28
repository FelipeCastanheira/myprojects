const data = require('../data/zoo_data');

// função criada no primeiro requisito
function getSpeciesByIds(...ids) {
  return data.species.filter((spec) => ids.includes(spec.id));
}

// função principal
function getOldestFromFirstSpecies(theId) {
  const zooId = data.employees.find((person) => person.id === theId).responsibleFor;
  let result = ['', '', 0];
  getSpeciesByIds(...zooId)[0].residents.forEach((pet) => {
    if (pet.age > result[2]) {
      result = [pet.name, pet.sex, pet.age];
    }
  });
  return result;
}

// console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
module.exports = getOldestFromFirstSpecies;
