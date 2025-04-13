const formData = {
  email: '',
  message: '',
};
const forma = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
forma.addEventListener('submit', submitForm);
forma.addEventListener('input', inputLabel);
function inputLabel(event) {
  formData.email = event.target.form.elements.email.value;
  formData.message = event.target.form.elements.message.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}
function submitForm(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  event.currentTarget.reset();
  localStorage.removeItem(KEY);
  formData.email = '';
  formData.message = '';
}
function saveText() {
  const save = localStorage.getItem(KEY);

  if (save) {
    const parseSave = JSON.parse(save);
    forma.elements.email.value = parseSave.email;
    forma.elements.message.value = parseSave.message;
    formData.email = parseSave.email;
    formData.message = parseSave.message;
  }
}

saveText();
