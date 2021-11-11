const loginBtn = document.querySelector('#login-btn');
const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');
const emailTryber = 'tryber@teste.com';
const passwordTryber = '123456';
const submitBtn = document.querySelector('#submit-btn');
const inputAgreement = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const sectionForm = document.querySelector('section');
const inputArray = document.querySelectorAll('input');
const paragraphArray = sectionForm.children;
const inputField = document.querySelector('.input-field');
const select = document.querySelector('select');

textArea.addEventListener('keyup', () => {
  const count = 500 - textArea.value.length;
  counter.innerHTML = count;
});

function hideContainer() {
  sectionForm.className = 'column';
  inputField.classList.toggle('display-none');
}

function loginAlert() {
  if (emailLogin.value === emailTryber && passwordLogin.value === passwordTryber
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', () => {
  loginAlert();
});

inputAgreement.addEventListener('click', () => {
  submitBtn.toggleAttribute('disabled');
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  hideContainer();
  const subjectCheckedArr = document.querySelectorAll('input[class="subject"]:checked');
  const checkedFamily = document.querySelector('input[name="family"]:checked');
  const rateChecked = document.querySelector('input[name="rate"]:checked');
  paragraphArray[0].innerHTML = `Nome: ${inputArray[2].value} ${inputArray[3].value}`;
  paragraphArray[1].innerHTML = `Email: ${inputArray[4].value}`;
  paragraphArray[2].innerHTML = `Casa: ${select.value}`;
  paragraphArray[3].innerHTML = `Família: ${checkedFamily.value}`;
  let subjectsText = 'Matérias: ';
  for (let index = 0; index < subjectCheckedArr.length - 1; index += 1) {
    subjectsText += subjectCheckedArr[index].value;
    subjectsText += ', ';
  }
  subjectsText += subjectCheckedArr[subjectCheckedArr.length - 1].value;
  paragraphArray[4].innerHTML = subjectsText;
  paragraphArray[5].innerHTML = `Avaliação: ${rateChecked.value}`;
  paragraphArray[6].innerHTML = `Observações: ${textArea.value}`;
});
