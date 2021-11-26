const data = require('../data/zoo_data');

// a função principal é getAnimalMap, essas três primeiras são chamadas dentro dela.
// quando não é passado o parâmetro INCLUDENAMES, uso a função auxiliarMap.

const auxiliarMap = () => {
  const map = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((spec) => {
    map[spec.location].push(spec.name);
  });
  return map;
};

// quando temos, além do includeNames, o parâmetro sex, uso a função namesAndSex

const namesAndSex = (sorted, sex) => {
  const map = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((spec) => {
    const maleOrFemale = spec.residents.filter((pet) => pet.sex === sex);
    if (sorted) {
      const namesArray = maleOrFemale.map((r) => r.name).sort();
      map[spec.location].push({ [spec.name]: namesArray });
    } else {
      map[spec.location].push({ [spec.name]: maleOrFemale.map((r) => r.name) });
    }
  });
  return map;
};

// quando é passada a função includeNames, faço a função namesMap

const namesMap = (sorted, sex) => {
  if (sex !== undefined) return namesAndSex(sorted, sex);
  const map = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((spec) => {
    if (sorted) {
      const namesArray = spec.residents.map((r) => r.name).sort();
      map[spec.location].push({ [spec.name]: namesArray });
    } else {
      const namesArray = spec.residents.map((r) => r.name);
      map[spec.location].push({ [spec.name]: namesArray });
    }
  });
  return map;
};

// essa é minha função principal, aqui está definida cada função que será chamada, com base no parâmetro dado.

function getAnimalMap(options) {
  if (options) {
    const { sex, includeNames, sorted } = options;
    if (includeNames) {
      return namesMap(sorted, sex);
    }
  }
  return auxiliarMap();
}

const options = { includeNames: true, sex: 'female' };
console.log(getAnimalMap(options));

module.exports = getAnimalMap;
