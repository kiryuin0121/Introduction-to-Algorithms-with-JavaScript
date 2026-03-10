import { generateRandomNum } from "../libs/generateRandomNum";

// quickSort:基準値より小さいグループ、大きいグループに分ける処理を再帰的に繰り返すことで整列
const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  // 基準値
  const pivot = arr[0];
  // 基準値より小さい配列
  const left = arr.slice(1).filter((el) => el <= pivot);
  // 基準値より大きい配列
  const right = arr.slice(1).filter((el) => el > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const quickSortIP = (arr: number[]) => {
  const _quickSortIP = (arr: number[], left: number, right: number) => {
    const pivotIndex = partition(arr, left, right);
    _quickSortIP(arr, left, pivotIndex - 1);
    _quickSortIP(arr, pivotIndex + 1, right);
  };
  _quickSortIP(arr, 0, arr.length - 1);
  return arr;
};
// 左手で考えるとわかりやすい。i:中指、j；人差し指。右端まで人差し指をひとつずつ進める。swapしないときは中指を固定する。swapするときは中指を一つ進めて人差し指がある位置と交換(手首をくるっと返す)。最後に右橋のpivotと中指をswap(このときに中指を一つすすめることを忘れない)
const partition = (arr: number[], left: number, right: number): number => {
  let i = left - 1;
  const pivot = arr[right];
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
};

const numbers = Array.from({ length: 10 }, () => generateRandomNum(0, 1000));
console.log(`before:[${numbers}]`);
// console.log(`abuter:[${quickSort(numbers)}]`);
console.log(`abuter:[${quickSortIP(numbers)}]`);
