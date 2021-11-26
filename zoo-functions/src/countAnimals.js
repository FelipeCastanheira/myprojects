const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal) {
    if (animal.sex) {
      const specieObj = data.species.find((spec) => spec.name === animal.specie);
      return specieObj.residents.filter((pet) => pet.sex === animal.sex).length;
    }
    return data.species.find((spec) => spec.name === animal.specie).residents.length;
  }
  return data.species.reduce((acc, spec) => {
    acc[spec.name] = spec.residents.length;
    return acc;
  }, {});
}

module.exports = countAnimals;
