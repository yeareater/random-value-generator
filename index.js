import crypto from 'crypto';

// TODO: Exclude specific characters
export function getRandomString(length) {
  const charCodes = getRandomNumbers(33, 126, length, true);

  return String.fromCharCode(...charCodes);
}

export function getRandomNumber(min, max) {
  return getRandomNumbers(min, max, 1)[0];
}

export function getRandomNumbers(min, max, size, duplication = false, sort = false) {
  const bucket = [];

  let number = min;
  while (number <= max) {
    bucket.push(number);
    number++;
  };

  const numbers = getElementsRandomly(bucket, size, duplication);

  if (sort) {
    numbers.sort((a, b) => a - b);
  }

  return numbers;
}

export function getElementRandomly(arr) {
  return getElementsRandomly(arr, 1)[0];
}

export function shuffle(arr) {
  return getElementsRandomly(arr, arr.length);
}

export function getElementsRandomly(arr, size, duplication = false) {
  if (size < 1) {
    throw new Error();
  }

  const copiedArr = arr.slice();
  const selectedElements = [];

  let randomIndex;
  let element;
  while(selectedElements.length < size) {
    randomIndex = crypto.randomInt(copiedArr.length);
    element = duplication ? copiedArr[randomIndex] : copiedArr.splice(randomIndex, 1)[0];
    selectedElements.push(element);
  }

  return selectedElements;
}
