import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);

let dataForm = {};

if (localStorage.getItem('feedback-form-state')) {
  loadSavedInput();
  dataForm = JSON.parse(localStorage.getItem('feedback-form-state'))
} 

function onInput(e) {
  dataForm[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function onSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  localStorage.removeItem('feedback-form-state');
  formRef.reset();
}

function loadSavedInput() {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  formRef.elements.email.value = email;
  formRef.elements.message.value = message;
}
