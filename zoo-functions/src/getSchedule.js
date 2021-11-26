const data = require('../data/zoo_data');

const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const animalArr = data.species.map((spec) => spec.name);

// {'Tuesday': '', 'Wednesday': '', 'Thursday': '', 'Friday': '', 'Saturday': '', 'Sunday': '', 'Monday': ''}

const fullSchedule = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
weekDays.forEach((day) => {
  const officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
  const exhibition = data.species
    .filter((spec) => spec.availability.includes(day))
    .map((spec) => spec.name);
  fullSchedule[day] = { officeHour, exhibition };
});

const daySchedule = (dayX) => {
  if (dayX === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const result = {};
  const officeHour = `Open from ${data.hours[dayX].open}am until ${data.hours[dayX].close}pm`;
  const exhibition = data.species
    .filter((spec) => spec.availability.includes(dayX))
    .map((spec) => spec.name);
  result[dayX] = { officeHour, exhibition };
  return result;
};

function getSchedule(scheduleTarget) {
  if (weekDays.includes(scheduleTarget) || scheduleTarget === 'Monday') {
    return daySchedule(scheduleTarget);
  }
  if (animalArr.includes(scheduleTarget)) {
    const specObj = data.species.find((spec) => spec.name === scheduleTarget);
    return specObj.availability;
  }
  return fullSchedule;
}

module.exports = getSchedule;
