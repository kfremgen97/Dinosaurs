import Dino from '../js/model/dinoModel';
import Person from '../js/model/personModel';

// Create test modals
const person = Person('kevin',5,10,180,'herbavor');
const dino = Dino('Tyrannosaurus Rex',11905,144,'carnivor',
  'North America', 'Late Cretaceous', 'The largest known skull measures in at 5 feet long.');
const dino2 = Dino("Triceratops", 13000, 114, "herbavor",
  "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh");

describe('compare different', () => {

  test('compare same', () => {
    const output = dino.compareDiet(person.getName(),person.getDiet());
    expect(output).toBe(`kevin is a(n) herbavor,while Tyrannosaurus Rex is a(n) carnivor`);
  });

  test('compare same', () => {
    const output = dino2.compareDiet(person.getName(),person.getDiet());
    expect(output).toBe('kevin and Triceratops are both herbavor')
  });
});
