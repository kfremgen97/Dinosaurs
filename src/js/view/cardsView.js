// Revealing module design pattern for cardsView
const cardsView = (function() {
  // Properties
  const view = document.querySelector('.view--cards');
  const cards = document.querySelector('.cards');
  const backButton = document.querySelector('.button--back');

  function generateFact(num,person,dino) {

   if(dino.getSpecies().toLowerCase() === 'pigeon') return dino.getFact();

    switch (num) {
      case 1:
        return dino.compareHeight(person.getName(), person.getHeight());
      case 2:
        return dino.compareWeight(person.getName(),person.getWeight());
      case 3:
       return dino.compareDiet(person.getName(), person.getDiet());
      default:
       return dino.getFact();
    }

  }

  function generateDinoCard() {
    
  }
  
  function generatePersonCard() {
    
  }
  
  function generateCards(person,dinos) {
    let cardsString = '';

    // From 0-3 generate random card and fact
    for(let i = 0; i < 4; i++) {
      // Get a random number from 1-4
      const num = Math.floor(Math.random() * 4);
      // Get the dino
      const dino = dinos[i];
      console.log(dino);
      const cardString = `  
           <li class="card">
                <img class="card__img" src ="./assets/img/${dino.getSpecies().replaceAll(' ','-')}.png" alt="${dino.getSpecies()}">
                <p class="card__name">${dino.getSpecies()}</p>
                <p class="card__fact">${generateFact(num,person,dino).replaceAll('.','')}</p>
            </li>
            `;
      // Add to the card string
      cardsString += cardString;
    }
    
    
    const personString = `
          <li class="card">
                <img class="card__img" src ="./assets/img/human.png" alt="${person.getName()}">
                <p class="card__name">${person.getName()}</p>
            </li>
    `;
    
    cardsString += personString;
    

    // From 4-7 generate random card and fact
    for(let i = 4; i < 8; i++) {
      // Get a random number from 1-4
      const num = Math.floor(Math.random() * 4);
      // Get the dino
      const dino = dinos[i];
      console.log(dino);
      const cardString = `  
           <li class="card">
                <img class="card__img" src ="./assets/img/${dino.getSpecies().replaceAll(' ','-')}.png" alt="${dino.getSpecies()}">
                <p class="card__name">${dino.getSpecies()}</p>
                <p class="card__fact">${generateFact(num,person,dino).replaceAll('.','')}</p>
            </li>
            `;
      // Add to the card string
      cardsString += cardString;
    }

    console.log(cardsString);

    cards.innerHTML = '';
    cards.insertAdjacentHTML('afterbegin', cardsString);
  }
  

  // Hide the view
  function hideView() {
    view.classList.add('view--hidden');
  }

  // Show the view
  function showView() {
    view.classList.remove('view--hidden');
  }

  // Properties and methods to make public
  return {
    showView,
    hideView,
    generateCards,
  }
  
})();

// Default export
export default cardsView;