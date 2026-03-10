// insertionsortに似てる。比較位置(j)が見つかるまでループして最後に比較位置に検証対象(current)を挿入

const shellSort = (arr: number[]) => {
  let gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (let targetIdx = gap; targetIdx < arr.length; targetIdx++) {
      const targetEl = arr[targetIdx];
      let insertIdx = targetIdx - gap;
      while (insertIdx >= 0 && arr[insertIdx] > targetEl) {
        arr[insertIdx + gap] = arr[insertIdx];
        insertIdx -= gap;
      }
      arr[insertIdx + gap] = targetEl;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
};
