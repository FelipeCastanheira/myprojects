const data = require('../data/zoo_data');

const getAnswerInfo = (info) => ({
  id: info.id,
  fullName: `${info.firstName} ${info.lastName}`,
  species: data.species
    .filter((spec) => info.responsibleFor.includes(spec.id))
    .map((spec) => spec.name),
  locations: data.species
    .filter((spec) => info.responsibleFor.includes(spec.id))
    .map((spec) => spec.location),
});

const ansById = (id) => {
  if (data.employees.some((person) => person.id === id)) {
    const info = data.employees.find((person) => person.id === id);
    return getAnswerInfo(info);
  }
  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(emplOject) {
  if (!emplOject) {
    return data.employees.map((info) => getAnswerInfo(info));
  }
  const { name, id } = emplOject;
  if (name) {
    const info = data.employees
      .find((person) => person.firstName === name || person.lastName === name);
    return getAnswerInfo(info);
  }
  return ansById(id);
}

module.exports = getEmployeesCoverage;
