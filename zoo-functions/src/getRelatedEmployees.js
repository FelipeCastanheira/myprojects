const data = require('../data/zoo_data');

// verifica se o id é de um gerente
function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

// retorna uma array com o nome dos funcionários do respectivo gerente passado pelo id
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const ansObject = data.employees.filter((person) => person.managers.includes(managerId));
    return ansObject.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
