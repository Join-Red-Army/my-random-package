// случайное рациональное число от min до max включительно
const getRandomFloat = (min = 0, max = 10) => {
  if (min > max) {
    [min, max] = [max, min];
  }
  max = max + 1;
  return Math.random() * (max - min) + min;
};


// случайное целое число от min до max включительно
const getRandomInt = (min = 0, max = 100) => {
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
};


// получить массив случайных целых чисел
const getRandomArr = (min = 0, max = 100, numberOfItems = 5) => {
  if (numberOfItems < 0) {
    throw new Error('Невозможно выполнить операцию\n' +
      'Указан отрицательный размер массива');
  }

  let arr = [];

  for (let i = 0; i < numberOfItems; i += 1) {
    arr.push(getRandomInt(min, max));
  }
  return arr;
};


// получить массив уникальных чисел
const getRandomUniq = (min = 0, max = min * 100, numberOfItems = 5) => {
  if (min > max) {
    [min, max] = [max, min];
  }

  if (numberOfItems < 0) {
    throw new Error('Невозможно выполнить операцию\n' +
      'Указан отрицательный размер массива')
  }

  if ((numberOfItems - 1) > (max - min)) {
    throw new Error('Невозможно выполнить операцию\n' +
      'Размер массива больше, чем уникальный ряд');
  }

  let arr = [];
  let i = 0;

  while (i < numberOfItems) {
    const num = getRandomInt(min, max);
    if (arr.includes(num)) {
      continue;
    }
    arr.push(num);
    i += 1;
  }
  return arr;
};

export { getRandomFloat, getRandomInt, getRandomArr, getRandomUniq };
