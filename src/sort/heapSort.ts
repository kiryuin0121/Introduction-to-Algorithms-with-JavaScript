const heapSort = (arr: number[]) => {
  const length = arr.length;
  // 1:配列をMaxHeapの構造に再構築
  // 葉の最初の要素番号は(length/2)なので、最後の節はその一つ前ということになる。ループで前の節に移動つつ部分的にMaxHeapを構築。(根の部分におけるMaxHeapが構築された時点で配列全体をMaxHeapの構造に変換できたことになる)
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i);
  }
  // 2:先頭に最大値すなわち配列の末尾のくるべき要素が存在するというMaxHeapの性質を利用し、末尾からソートしていく。
  // 一番上は最大で確定なのでこれを末尾に持っていく。そのあと次のループに備えてMaxHeapを再構築。(末尾からソートされていくのでlengthも1つずつ少なくなっていく)
  for (let i = length - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
};
const heapify = (arr: number[], length: number, i: number) => {
  let max = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < length && arr[left] > arr[max]) {
    max = left;
  }
  if (right < length && arr[right] > arr[max]) {
    max = right;
  }
  // maxは親、左の子、右の子の内の最大値があった場所を表すポインタのようなものでswapしたときにそれ自体が変更されることはないことに注意。
  if (max !== i) {
    [arr[i], arr[max]] = [arr[max], arr[i]];
    heapify(arr, length, max);
  } else {
    // 節が最大ということは、その節の子孫はMaxHeapの構造となっているということになる。
  }
};
