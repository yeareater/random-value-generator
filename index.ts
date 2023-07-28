import { randomInt } from 'crypto';

// TODO: Exclude specific characters
export function getString(length: number): string {
  const charCodes = getNumbers(33, 126, length, true);

  return String.fromCharCode(...charCodes);
}

export function getNumber(min: number, max:number): number {
  return getNumbers(min, max, 1)[0];
}

export function getNumbers(
  min: number,
  max: number,
  size: number,
  duplication?: boolean,
  sort?: boolean): number[] {
  const bucket: number[] = [];

  let num = min;
  while (num <= max) {
    bucket.push(num);
    num++;
  };

  const numbers: number[] = getElems(bucket, size, duplication);

  if (sort) {
    numbers.sort((a, b) => a - b);
  }

  return numbers;
}

export function getElem(arr: any[]): any {
  return getElems(arr, 1)[0];
}

export function shuffle(arr: any[]): any[] {
  return getElems(arr, arr.length);
}

export function getElems(arr: any[], size: number, duplication?: boolean): any[] {
  if (size < 1) {
    throw new Error();
  }

  const copiedArr = arr.slice();
  const selectedElements: any[] = [];

  let randomIndex: number;
  let element: any;
  while(selectedElements.length < size) {
    randomIndex = randomInt(copiedArr.length);
    element = duplication ? copiedArr[randomIndex] : copiedArr.splice(randomIndex, 1)[0];
    selectedElements.push(element);
  }

  return selectedElements;
}

export default {
  getString,
  getNumber,
  getNumbers,
  getElem,
  shuffle,
  getElems,
};
