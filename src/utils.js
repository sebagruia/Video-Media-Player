const getRandomNumber = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

export const shuffle = (array) => {
  const newArray = [];

  for (let element of array) {
    let randomNumber = getRandomNumber(array.length - 1, 0);

    if (newArray.includes(randomNumber)) {
      while (newArray.includes(randomNumber)) {
        randomNumber = getRandomNumber(array.length - 1, 0);
      }
      newArray.push(randomNumber);
    } else {
      newArray.push(randomNumber);
    }
  }
  const shuffledArray = newArray.map(element => array[element]);

  return shuffledArray;
};

// const next = (array, index)=>{
  
// }