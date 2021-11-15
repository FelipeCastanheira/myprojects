const addFood = document.querySelectorAll('.line h3')[0];
const addDrink = document.querySelectorAll('.line h3')[1];
const parentL1 = document.querySelector('.food');
const parentL2 = document.querySelector('.drink');
const plus1 = document.querySelectorAll('.plus')[0];
const plus2 = document.querySelectorAll('.plus')[1];
const input1 = document.querySelector('input');
const menuBtn = document.querySelector('.menu-btn');

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