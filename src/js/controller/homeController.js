// Imports
import dataModel from '../model/dataModel';
import getDinos from '../service/dinoService';
import formView from '../view/formView';
import cardsView from '../view/cardsView';

// Validate the form data
const validateForm = function (formData) {
  // Get the form data values
  // Remember .values() returns strings
  const [name, feet, inch, weight, diet] = formData.values();

  // Make sure no value is a falsy, i.e an empty string
  if (!name || !feet || !inch || !weight || !diet) throw new Error('Incomplete form');
  // Make sure feet,inch, and weight are greater than 0,
  // javascript will convert strings to numbers when seeing comparison operators via type coercion
  if (feet <= 0 || feet > 10) throw new Error('Invalid feet');
  if (inch < 0 || inch >= 12) throw new Error('Invalid inches');
  if (weight <= 0 || weight >= 1000) throw new Error('Invalid weight');
};

// Handle the form submission
const formHandler = function (formData) {

  try {
    // Hide the error message just in case it is displayed
    formView.hideError();
    // Validate the form Data
    validateForm(formData);
    // Create the Person
    dataModel.setPerson(...formData.values());
    formView.clearForm();
    // Hide the form
    formView.hideView();
    // Show the cards view
    cardsView.showView();
    // Generate the cards
    cardsView.generateCards(dataModel.getPerson(), dataModel.getDinos())


  } catch (error) {
    // Log the error
    console.error(error);
    // Display the error
    formView.showError(error.message);
  }
};

// Get the dino info
const getDinoInfo = async function() {
  try {
    // Get the dinos via service
    const { Dinos: dinos } = await getDinos();
    // Store the dino info in the model
    dataModel.setDinos(dinos);
    // Dino for testing
    // const dino = dataModel.getDinos()[0];
    // console.log(dino.getSpecies(), dino.getHeight(), dino.getWeight(),
    //   dino.getWhere(), dino.getWhen(), dino.getFact());
  } catch (error) {
    alert(error.message);
  }
};

const backHandler = function () {
  cardsView.hideView();
  formView.showView();
}

// Event listeners
formView.addFormPublisher(formHandler);
cardsView.addBackPublisher(backHandler)

// Application set up
getDinoInfo();
