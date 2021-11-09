// Imports
import formView from '../view/formView';
import Person from '../model/personModel';

// Handle the form submission
const formHandler = function (formData) {

  // Create the Person instance
  const person = new Person(...formData.values());
  console.log(person);
};

// Event listeners
formView.addFormPublisher(formHandler);
