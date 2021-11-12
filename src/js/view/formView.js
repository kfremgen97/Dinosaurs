// Revealing module design pattern for formView
const formView = (function () {
  const form = document.querySelector('.form');
  const heading = document.querySelector('.heading--form');
  const nameInput = document.querySelector('.form__input--name');
  const feetInput = document.querySelector('.form__input--feet');
  const inchInput = document.querySelector('.form__input--inch');
  const weightInput = document.querySelector('.form__input--weight');
  const dietSelect = document.querySelector('.form__select--diet');
  const submitButton = document.querySelector('.button--submit');

  function addFormPublisher(formHandler) {
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

  function displayError(message) {
    heading.textContent = message;
    heading.classList.add('heading--error');
  }
  
  function hideError() {
    heading.classList.remove('heading--error');
    heading.textContent = 'How do you compare?';
  }

  // Properties and methods to make public
  return {
    addFormPublisher,
    displayError,
    hideError,
  };
}());

// Default export
export default formView;
