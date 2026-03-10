const MERGESORT = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  const center = arr[0];
  const left = MERGESORT(arr.slice(1).filter((el) => el <= center));
  const right = MERGESORT(arr.slice(1).filter((el) => el > center));
  return [...left, center, ...right];
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const middle: number = Math.floor(arr.length / 2);

  const left: number[] = mergeSort(arr.slice(0, middle));
  const right: number[] = mergeSort(arr.slice(middle));

  return merge(left, right);
};
const merge = (left: number[], right: number[]) => {
  const result: number[] = [];
  // left index
  let i = 0;
  // right index
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
};
