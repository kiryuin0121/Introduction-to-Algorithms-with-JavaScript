const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle - 1;
    } else {
      right = middle + 1;
    }
  }

  return -1;
};

// recursive
const binarySearchR = (
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1
): number => {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);

  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] < target) {
    return binarySearchR(arr, target, left, middle - 1);
  } else {
    return binarySearchR(arr, target, middle + 1, right);
  }
};

const numbers = [0, 12, 45, 228, 312, 2983];
console.log(binarySearch(numbers, 228));
console.log(binarySearchR(numbers, 228));
export {};
