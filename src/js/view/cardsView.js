// CardsView Class
class CardsView {
  // constructor
  constructor() {
    this.view = document.querySelector('.view--cards');
    this.cards = document.querySelector('.cards');
    this.backButton = document.querySelector('.button--back');
  }

  // Add back publisher
  addBackPublisher(handler) {
    this.backButton.addEventListener('click', (event) => {
      // Prevent default action
      event.preventDefault();
      handler();
    })
  }

  // Generate dino fact
  generateFact(num, person, dino) {
    // If dino is pigeon return fact
    if (dino.getSpecies().toLowerCase() === 'pigeon') return dino.getFact();

    // Dpending on number compare dino and human
    switch (num) {
      case 1:
        return dino.compareHeight(person.getName(), person.getHeight());
      case 2:
        return dino.compareWeight(person.getName(), person.getWeight());
      case 3:
        return dino.compareDiet(person.getName(), person.getDiet());
      default:
        return dino.getFact();
    }
  }

  // Generate dino card string
  generateDinoCard(num, person, dino) {
    return `  
     <li class="card">
        <img class="card__img" src ="./assets/img/${dino.getSpecies().replaceAll(' ', '-')}.png" alt="${dino.getSpecies()}">
        <p class="card__name">${dino.getSpecies()}</p>
        <p class="card__fact">${this.generateFact(num, person, dino).replaceAll('.', '')}</p>
     </li>
      `;
  }

  // Generate person card string
  generatePersonCard(person) {
    return `
    <li class="card">
        <img class="card__img" src="./assets/img/human.png" alt="${person.getName()}">
        <p class="card__name">${person.getName()}</p>
    </li>
    `;
  }

  // Generate teh acrds to be shown
  generateCards(person, dinos) {
    let cardsString = '';

    // From 0-3 generate random card and fact
    for (let i = 0; i < 4; i++) {
      // Get a random number from 1-4
      const num = Math.floor(Math.random() * 4);
      // Get the dino
      const dino = dinos[i];
      // Generate the card string
      const cardString = this.generateDinoCard(num, person, dino);
      // Add to the cards string
      cardsString += cardString;
    }

    // Generate person stirng
    const personString = this.generatePersonCard(person);
    // Add to the cards string
    cardsString += personString;

    // From 4-7 generate random card and fact
    for (let i = 4; i < 8; i++) {
      // Get a random number from 1-4
      const num = Math.floor(Math.random() * 4);
      // Get the dino
      const dino = dinos[i];
      // Generate the card string
      const cardString = this.generateDinoCard(num, person, dino);
      // Add to the cards string
      cardsString += cardString;
    }

    // Clear the cards
    this.cards.innerHTML = '';
    // Add new cards
    this.cards.insertAdjacentHTML('afterbegin', cardsString);
  }


  // Hide the view
  hideView() {
    this.view.classList.add('view--hidden');
  }

  // Show the view
  showView() {
    this.view.classList.remove('view--hidden');
  }
}

// Default export
export default new CardsView();