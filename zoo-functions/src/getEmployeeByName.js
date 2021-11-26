const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employeeName
    ? data.employees
      .find((person) => (person.firstName === employeeName) || (person.lastName === employeeName))
    : {};
}

module.exports = getEmployeeByName;
