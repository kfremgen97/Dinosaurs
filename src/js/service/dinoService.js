const getDinos = function () {
  return fetch('./assets/json/dino.json')
    .then((response) => {
      if (!response.ok) throw new Error('Unable to read dinos');
      return response.json();
    }).then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export default getDinos;