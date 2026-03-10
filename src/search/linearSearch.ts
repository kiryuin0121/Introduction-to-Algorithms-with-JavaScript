const linerSearch = (arr: number[], target: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const numbers = [0, 12, 45, 228, 312, 2983];
console.log(linerSearch(numbers, 228));
