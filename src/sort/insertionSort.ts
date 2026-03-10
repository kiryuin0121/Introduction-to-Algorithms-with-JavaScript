const insertionSort = (arr: number[]) => {
  for (let targetIdx = 1; targetIdx < arr.length; targetIdx++) {
    const targetEl = arr[targetIdx];
    let insertIdx = targetIdx - 1;
    while (insertIdx >= 0 && arr[insertIdx] > targetEl) {
      arr[insertIdx + 1] = arr[insertIdx];
      insertIdx--;
    }
    arr[insertIdx + 1] = targetEl;
  }
  return arr;
};
