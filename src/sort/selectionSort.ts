import { generateRandomNum } from "../libs/generateRandomNum";

// selectionSort:先頭(未確定)の要素以降を調べて最小の要素を先頭と入れ替える処理を繰り返すことで整列する(先頭に最小のものを移動させることで確定)
const selectionSort = (arr: number[]) => {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    [result[i], result[minIndex]] = [result[minIndex], result[i]];
  }
  return result;
};

const numbers = Array.from({ length: 10 }, () => generateRandomNum(0, 1000));

console.log(`before:[${numbers}]`);
console.log(`after:[${selectionSort(numbers)}]`);
