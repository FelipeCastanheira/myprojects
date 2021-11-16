const addFood = document.querySelectorAll('.line h3')[0];
const addDrink = document.querySelectorAll('.line h3')[1];
const parentL1 = document.querySelector('.food');
const parentL2 = document.querySelector('.drink');
const plus1 = document.querySelectorAll('.plus')[0];
const plus2 = document.querySelectorAll('.plus')[1];
const input1 = document.querySelector('input');
const menuBtn = document.querySelector('.menu-btn');

// funções geradas no projeto JS-Unit-Tests
const restaurant = {
  fetchMenu: () => {},
  consumption: [],
};

const addOrder = (myOrder) => {
  restaurant.consumption.push(myOrder);
};

const sumKey = (menuKey) => {
  let actualSum = 0;
  for (let i = 0; i < restaurant.consumption.length; i += 1) {
    const element = restaurant.consumption[i];
    if (menuKey[element]) {
      actualSum += menuKey[element];
    }
  }
  return actualSum * 1.1;
};

const createMenu = (myMenu) => {
  restaurant.fetchMenu = () => myMenu;
  restaurant.order = addOrder;
  restaurant.pay = () => {
    let actualSum = 0;
    for (let index = 0; index < Object.keys(myMenu).length; index += 1) {
      let keyArr = Object.values(myMenu);
      actualSum += sumKey(keyArr[index]);
    }
    return actualSum;
  };
  return restaurant;
};
// funções acima foram geradas no projeto JS-Unit-Tests

const changeFood = () => {;
  const lastSib = plus1.previousSibling;
  parentL1.lastChild.remove();
  const noneArr = document.querySelectorAll('.food .display-none');
  const newLine = noneArr[0];
  newLine.className = 'input-container';
  if (noneArr.length === 1) {
    const xAdd = document.querySelector('.food .add');
    xAdd.remove();
  } 
}

const changeDrink = () => {;
  const lastSib = plus2.previousSibling;
  parentL2.lastChild.remove();
  const noneArr = document.querySelectorAll('.drink .display-none');
  const newLine = noneArr[0];
  newLine.className = 'input-container';
  if (noneArr.length === 1) {
    const xAdd = document.querySelector('.drink .add');
    xAdd.remove();
  } 
}

input1.addEventListener('keyup', () => {
  if (input1.value) {
    menuBtn.disabled = false;
  }
})

addFood.addEventListener('click', () => {
  changeFood();
});

addDrink.addEventListener('click', () => {
  changeDrink();
});