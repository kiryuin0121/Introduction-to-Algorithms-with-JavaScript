import { generateRandomNum } from "../libs/generateRandomNum";

// bubbleSort:末尾(未確定)まで現在の要素と次の要素を比較&整列する処理を繰り返す。(末尾に最大のものを移動させて確定)
const bubbleSort = (arr: number[]): number[] => {
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
};

const numbers = Array.from({ length: 10 }, () => generateRandomNum(0, 1000));
console.log(`before:[${numbers}]`);
console.log(`abuter:[${bubbleSort(numbers)}]`);
