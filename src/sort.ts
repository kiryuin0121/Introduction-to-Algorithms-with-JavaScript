// ==1==
// 7/22:△
// 7/24:〇
const bubbleSort = (arr: number[]) => {
  for (let confirmNum = 0; confirmNum < arr.length; confirmNum++) {
    for (
      let currentIdx = 0;
      currentIdx < arr.length - confirmNum - 1;
      currentIdx++
    ) {
      if (arr[currentIdx] > arr[currentIdx + 1]) {
        [arr[currentIdx], arr[currentIdx + 1]] = [
          arr[currentIdx + 1],
          arr[currentIdx],
        ];
      }
    }
  }
  return arr;
};

// ==2==
// 7/22:〇
// 7/24:〇
const selectionSort = (arr: number[]) => {
  for (let targetIdx = 0; targetIdx < arr.length; targetIdx++) {
    let minIdx = targetIdx;
    for (
      let currentIdx = targetIdx + 1;
      currentIdx < arr.length;
      currentIdx++
    ) {
      if (arr[currentIdx] < arr[minIdx]) {
        minIdx = currentIdx;
      }
    }
    [arr[targetIdx], arr[minIdx]] = [arr[minIdx], arr[targetIdx]];
  }
  return arr;
};
// ==3==
// 7/22:△
// 7/24:〇
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
// ==4==
// 7/22:△
// 7/24:〇
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
// ==5==
// 7/22:X(2パターン目)
// 7/24:X
const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  const pivotEl = arr[0];
  const smallArr = arr.slice(1).filter((el) => el <= pivotEl);
  const largeArr = arr.slice(1).filter((el) => el > pivotEl);
  return [...quickSort(smallArr), pivotEl, ...quickSort(largeArr)];
};
const QUICKSORT = (arr: number[]) => {
  const _partition = (arr: number[], startIdx: number, lastIdx: number) => {
    const pivotEl = arr[lastIdx];
    let pivotIdx = startIdx - 1;
    for (let currentIdx = startIdx; currentIdx < lastIdx; currentIdx++) {
      if (arr[currentIdx] < pivotEl) {
        pivotIdx++;
        [arr[currentIdx], arr[pivotIdx]] = [arr[pivotIdx], arr[currentIdx]];
      }
    }
    [arr[lastIdx], arr[pivotIdx + 1]] = [arr[pivotIdx + 1], arr[lastIdx]];
    return pivotIdx + 1;
  };
  const _QUICKSORT = (arr: number[], startIdx: number, lastIdx: number) => {
    if (startIdx < lastIdx) {
      const pivotIdx = _partition(arr, startIdx, lastIdx);
      _QUICKSORT(arr, startIdx, pivotIdx - 1);
      _QUICKSORT(arr, pivotIdx + 1, lastIdx);
    }
  };
  _QUICKSORT(arr, 0, arr.length - 1);
  return arr;
};
// ==6==
// 7/22:X
// 7/24:X
const mergeSort = (arr: number[]) => {
  const _merge = (leftArr: number[], rightArr: number[]): number[] => {
    const sortedArr: number[] = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
      if (leftArr[leftIdx] <= rightArr[rightIdx]) {
        sortedArr.push(leftArr[leftIdx]);
        leftIdx++;
      } else {
        sortedArr.push(rightArr[rightIdx]);
        rightIdx++;
      }
    }
    return [
      ...sortedArr,
      ...leftArr.slice(leftIdx),
      ...rightArr.slice(rightIdx),
    ];
  };
  const _mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    const middleIdx = Math.floor(arr.length / 2);

    const leftArr = _mergeSort(arr.slice(0, middleIdx));
    const rightArr = _mergeSort(arr.slice(middleIdx));

    return _merge(leftArr, rightArr);
  };
  return _mergeSort(arr);
};
// ==7==
// 7/22:〇
// 7/24:〇
const heapSort = (arr: number[]) => {
  const _heapifyDown = (arr: number[], heapSize: number, parentIdx: number) => {
    let maxIdx = parentIdx;
    const leftChildIdx = parentIdx * 2 + 1;
    const rightChildIdx = parentIdx * 2 + 2;

    if (leftChildIdx < heapSize && arr[leftChildIdx] > arr[maxIdx]) {
      maxIdx = leftChildIdx;
    }
    if (rightChildIdx < heapSize && arr[rightChildIdx] > arr[maxIdx]) {
      maxIdx = rightChildIdx;
    }

    if (maxIdx !== parentIdx) {
      [arr[parentIdx], arr[maxIdx]] = [arr[maxIdx], arr[parentIdx]];
      return _heapifyDown(arr, heapSize, maxIdx);
    } else {
      return;
    }
  };
  const _heapSort = (arr: number[]) => {
    for (
      let currentNodeIdx = Math.floor(arr.length / 2) - 1;
      currentNodeIdx >= 0;
      currentNodeIdx--
    ) {
      _heapifyDown(arr, arr.length, currentNodeIdx);
    }
    for (let targetIdx = arr.length - 1; targetIdx >= 0; targetIdx--) {
      [arr[targetIdx], arr[0]] = [arr[0], arr[targetIdx]];
      _heapifyDown(arr, targetIdx, 0);
    }
    return arr;
  };
  return _heapSort(arr);
};

export {};
