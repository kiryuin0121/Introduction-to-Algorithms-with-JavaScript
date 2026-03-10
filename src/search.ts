// ==1==
// 7/22:〇
// 7/24:〇
const linearSearch = (arr: number[], target: number) => {
  if (arr.length === 0) return -1;
  for (let currentIdx = 0; currentIdx < arr.length; currentIdx++) {
    if (arr[currentIdx] === target) return currentIdx;
  }
  return -1;
};
// ==2==
// 7/22:△
// 7/24:〇
const binarySearch = (arr: number[], target: number): number => {
  const _binarySearch = (
    arr: number[],
    target: number,
    startIdx: number,
    lastIdx: number
  ): number => {
    if (startIdx > lastIdx) return -1;

    const centerIdx = Math.floor((startIdx + lastIdx) / 2);

    if (arr[centerIdx] === target) {
      return centerIdx;
    } else if (arr[centerIdx] < target) {
      return _binarySearch(arr, target, centerIdx + 1, lastIdx);
    } else {
      return _binarySearch(arr, target, startIdx, centerIdx - 1);
    }
  };

  return _binarySearch(arr, target, 0, arr.length - 1);
};
const BINARYSEARCH = (arr: number[], target: number) => {
  let startIdx = 0;
  let lastIdx = arr.length - 1;
  // 抜ける条件はstart>lastだから継続する条件はその否定
  while (startIdx <= lastIdx) {
    const centerIdx = Math.floor((startIdx + lastIdx) / 2);
    if (target === arr[centerIdx]) {
      return centerIdx;
    } else if (target < arr[centerIdx]) {
      lastIdx = centerIdx - 1;
    } else {
      startIdx = centerIdx + 1;
    }
  }
  return -1;
};
// ==3==
// 7/22:〇
// 7/24:〇
const naiveSearch = (text: string, pattern: string) => {
  const t = text.length;
  const p = pattern.length;
  for (let textIdx = 0; textIdx < t - p + 1; textIdx++) {
    let isMatch = true;
    for (let patternIdx = 0; patternIdx < p; patternIdx++) {
      if (text[textIdx + patternIdx] !== pattern[patternIdx]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return textIdx;
  }
  return -1;
};
// ==4==
const kmpSearch = () => {};
// ==5==
const bmSearch = () => {};
export {};
