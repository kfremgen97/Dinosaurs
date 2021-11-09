// Imports
import formView from '../view/formView';
import Person from '../model/personModel';

// Validate the form data
const validateForm = function (formData) {
  // Get the form data values
  const [name, feet, inch, weight, diet] = formData.values();

  // Make sure no value is a falsy
  if (!name || !diet) throw new Error('Incomplete form');
  // Make sure feet,inch, and weight are greater than 0
  if (feet <= 0 || feet > 10) throw new Error('Invalid feet');
  if (inch < 0 || inch >= 12) throw new Error('Invalid inches');
  if (weight <= 0 || weight >= 1000) throw new Error('Invalid weight');
};

// Handle the form submission
const formHandler = function (formData) {

  try {
    // Validate the form Data
    validateForm(formData);
    // Create the Person instance
    const person = new Person(...formData.values());
    console.log(person);
  } catch (error) {
    // Log the error
    console.error(error);
  }
};

// Event listeners
formView.addFormPublisher(formHandler);
