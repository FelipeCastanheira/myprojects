const data = require('../data/zoo_data');

// função auxiliar da countEntrants
const ageClass = (age) => {
  if (age < 18) {
    return 'child';
  }
  if (age < 50) {
    return 'adult';
  }
  return 'senior';
};

// função que conta as pessoas que entram
function countEntrants(entrants) {
  return entrants.reduce((acc, { age }) => {
    acc[ageClass(age)] += 1;
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
}

// função que verifica que foi passado um parâmetro válido
const verifyEntr = (people) => {
  if (people) {
    if (people.length > 0) {
      return true;
    }
    return false;
  }
  return false;
};

// função principal
function calculateEntry(entrants) {
  if (verifyEntr(entrants)) {
    const countObj = countEntrants(entrants);
    return countObj.child * 20.99 + countObj.adult * 49.99 + countObj.senior * 24.99;
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
