import Dino from '../js/model/dinoModel';
import Person from '../js/model/personModel';

// Create test modals
const person = Person('kevin',5,10,180,'omnivore');
const dino = Dino('Tyrannosaurus Rex',11905,144,'carnivor','North America',
  'Late Cretaceous', 'The largest known skull measures in at 5 feet long.');

describe('compare bigger dino', () => {

  test('compare height', () => {
    const output = dino.compareHeight(person.getName(),person.getHeight());
    expect(output).toBe(`Tyrannosaurus Rex is 2.06 times taller than kevin`);
  });

  test('compare weight', () => {
    const output = dino.compareWeight(person.getName(),person.getWeight());
    expect(output).toBe('Tyrannosaurus Rex is 66.14 times heavier than kevin')
  });
});
