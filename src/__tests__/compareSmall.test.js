import Dino from '../js/model/dinoModel';
import Person from '../js/model/personModel';

// Create test modals
const person = Person('kevin',5,10,180,'omnivore');
const dino = Dino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.");

describe('compare smallerdino', () => {

  test('compare height', () => {
    const output = dino.compareHeight(person.getName(),person.getHeight());
    expect(output).toBe(`kevin is 7.78 times taller than Pigeon`);
  });

  test('compare weight', () => {
    const output = dino.compareWeight(person.getName(),person.getWeight());
    expect(output).toBe('kevin is 360.00 times heavier than Pigeon')
  });
});
