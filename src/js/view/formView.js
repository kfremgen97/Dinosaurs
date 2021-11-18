// FormView Class
class FormView {
  // Constructor
  constructor() {
    this.view = document.querySelector('.view--form');
    this.form = document.querySelector('.form');
    this.heading = document.querySelector('.heading--form');
    this.nameInput = document.querySelector('.form__input--name');
    this.feetInput = document.querySelector('.form__input--feet');
    this.inchInput = document.querySelector('.form__input--inch');
    this.weightInput = document.querySelector('.form__input--weight');
    this.dietSelect = document.querySelector('.form__select--diet');
  }

  // Add form publisher
  addFormPublisher(formHandler) {
    // Add event listener on form submit
    this.form.addEventListener('submit', (event) => {
      // Prevent default
      event.preventDefault();
      // Create a form data object
      const formData = new FormData(this.form);
      // Call the handler
      formHandler(formData);
    });
  }

  // Clear form inputs
  clearForm() {
    this.nameInput.value = '';
    this.feetInput.value = '';
    this.inchInput.value = '';
    this.weightInput.value = '';
    this.dietSelect.value = 'herbavor';
  }

  // Show the form view
  showView() {
    this.view.classList.remove('view--hidden')
  }

  // Hide the form view
  hideView() {
    this.view.classList.add('view--hidden')
  }

  // Show the form error
  showError(message) {
    this.heading.textContent = message;
    this.heading.classList.add('heading--error');
  }

  // Hide the form error
  hideError() {
    this.heading.classList.remove('heading--error');
    this.heading.textContent = 'How do you compare?';
  }
}

// Default export
export default new FormView();
