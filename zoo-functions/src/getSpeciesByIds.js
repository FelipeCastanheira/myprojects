// const zoo_data = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((spec) => ids.includes(spec.id));
}

module.exports = getSpeciesByIds;
