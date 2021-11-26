const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((spec) => spec.name === animal).residents.every((pet) => pet.age >= age);
}

module.exports = getAnimalsOlderThan;
