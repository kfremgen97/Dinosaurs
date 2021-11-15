// Revealing module design pattern for formView
const formView = (function () {
  const view = document.querySelector('.view--form');
  const form = document.querySelector('.form');
  const heading = document.querySelector('.heading--form');
  const nameInput = document.querySelector('.form__input--name');
  const feetInput = document.querySelector('.form__input--feet');
  const inchInput = document.querySelector('.form__input--inch');
  const weightInput = document.querySelector('.form__input--weight');
  const dietSelect = document.querySelector('.form__select--diet');

  const addFormPublisher = function (formHandler) {
    // Add event listener on form submit
    form.addEventListener('submit', (event) => {
      // Prevent default
      event.preventDefault();
      // Create a form data object
      const formData = new FormData(form);
      // Call the handler
      formHandler(formData);
    });
  }

  // Clear form inputs
  const clearForm = function () {
    nameInput.value = '';
    feetInput.value = '';
    inchInput.value = '';
    weightInput.value = '';
    dietSelect.value = 'herbavor';
  }

  // Show the form view
  const showView = function () {
    view.classList.remove('view--hidden')
  }

  // Hide the form view
  const hideView = function () {
    view.classList.add('view--hidden')
  }

  // Show the form error
  const showError = function (message) {
    heading.textContent = message;
    heading.classList.add('heading--error');
  }

  // Hide the form error
  const hideError = function () {
    heading.classList.remove('heading--error');
    heading.textContent = 'How do you compare?';
  }

  // Properties and methods to make public
  return {
    addFormPublisher,
    clearForm,
    showView,
    hideView,
    showError,
    hideError,
  };
}());

// Default export
export default formView;
