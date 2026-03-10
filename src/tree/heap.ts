// class MiniHeap {
//   heap: number[] = [NaN];
//   currentSize = 0;

//   // get index
//   parentIndex(index: number) {
//     return Math.floor(index / 2);
//   }
//   leftChildIndex(index: number) {
//     return index * 2;
//   }
//   rightChildIndex(index: number) {
//     return index * 2 + 1;
//   }
//   /**
//    *heapifyDownの入れ替え対象(子の中で最小のもの)の要素番号を返す関数
//    */
//   minChildIndex(index: number) {
//     const leftChildIdx = this.leftChildIndex(index);
//     const rightChildIdx = this.rightChildIndex(index);
//     // 子が一つしか存在しない(=>左側の子のみ存在)場合
//     if (rightChildIdx > this.currentSize) {
//       return leftChildIdx;
//     } else {
//       // 子が左右両方に存在する場合
//       if (this.heap[leftChildIdx] <= this.heap[rightChildIdx]) {
//         return leftChildIdx;
//       } else {
//         return rightChildIdx;
//       }
//     }
//   }
//   // swap
//   swap(index1: number, index2: number) {
//     [this.heap[index1], this.heap[index2]] = [
//       this.heap[index1],
//       this.heap[index2],
//     ];
//   }
//   // heapify
//   /**
//    *親<=子の関係を満たすように下から上方向に入れ替えを行う関数
//    */
//   heapifyUp(index: number) {
//     let currentIdx = index;
//     while (this.parentIndex(currentIdx) > 0) {
//       const parentIdx = this.parentIndex(currentIdx);
//       if (this.heap[currentIdx] < this.heap[parentIdx]) {
//         this.swap(currentIdx, parentIdx);
//       }
//       currentIdx = parentIdx;
//     }
//   }
//   /**
//    *親<=子の関係を満たすように上から下方向に入れ替えを行う関数
//    */
//   heapifyDown(index: number) {
//     let currentIdx = index;
//     // 子が存在する=>少なくとも左の子が存在する
//     while (this.leftChildIndex(currentIdx) <= this.currentSize) {
//       const minChildIdx = this.minChildIndex(currentIdx);
//       if (this.heap[currentIdx] > this.heap[minChildIdx]) {
//         this.swap(currentIdx, minChildIdx);
//       }
//       currentIdx = minChildIdx;
//     }
//   }

//   // insert
//   insert(value: number) {
//     this.heap.push(value);
//     this.currentSize++;
//     this.heapifyUp(this.currentSize);
//   }
//   // shift
//   shift() {
//     if (this.heap.length === 1) return null;

//     const firstItem = this.heap[1];
//     const lastItem = this.heap.pop() as number;
//     if (this.heap.length === 1) return firstItem;

//     this.heap[1] = lastItem;
//     this.currentSize--;
//     this.heapifyDown(1);

//     return firstItem;
//   }
//   print() {
//     this.heap.slice(1).forEach((el) => console.log(el));
//   }
// }

// const miniheap = new MiniHeap();

// class MaxHeap {
//   heap: number[] = [NaN];
//   currentSize: number = 0;

//   // getIndex
//   parentIndex(index: number) {
//     return Math.floor(index / 2);
//   }
//   leftChildIndex(index: number) {
//     return index * 2;
//   }
//   rightChildIndex(index: number) {
//     return index * 2 + 1;
//   }
//   maxChildIndex(index: number) {
//     const leftChildIdx = this.leftChildIndex(index);
//     const rightChildIdx = this.rightChildIndex(index);
//     if (rightChildIdx > this.currentSize) {
//       return leftChildIdx;
//     } else {
//       if (this.heap[leftChildIdx] >= this.heap[rightChildIdx]) {
//         return leftChildIdx;
//       } else {
//         return rightChildIdx;
//       }
//     }
//   }
//   //swap
//   swap(index1: number, index2: number) {
//     [this.heap[index1], this.heap[index2]] = [
//       this.heap[index2],
//       this.heap[index1],
//     ];
//   }
//   // heapify
//   heapifyUp(index: number) {
//     let currentIdx = index;
//     while (this.parentIndex(currentIdx) > 0) {
//       const parentIdx = this.parentIndex(currentIdx);
//       if (this.heap[currentIdx] > this.heap[parentIdx]) {
//         this.swap(currentIdx, parentIdx);
//       }
//       currentIdx = parentIdx;
//     }
//   }
//   heapifyDown(index: number) {
//     let currentIdx = index;
//     while (this.leftChildIndex(currentIdx) <= this.currentSize) {
//       const maxChildIdx = this.maxChildIndex(currentIdx);
//       if (this.heap[currentIdx] < this.heap[maxChildIdx]) {
//         this.swap(currentIdx, maxChildIdx);
//       }
//       currentIdx = maxChildIdx;
//     }
//   }
//   // insert
//   insert(value: number) {
//     this.heap.push(value);
//     this.currentSize++;
//     this.heapifyUp(this.currentSize);
//   }
//   // shift
//   shift() {
//     if (this.currentSize === 0) return null;

//     const firstItem = this.heap[1];
//     const lastItem = this.heap.pop()!;
//     this.currentSize--;
//     this.heap[1] = lastItem;

//     if (this.currentSize > 1) {
//       this.heapifyDown(1);
//     }

//     return firstItem;
//   }
// }

class MiniHeap {
  heap: number[] = [NaN];
  size: number = 0;

  // getIndex
  parentIndex(index: number): number {
    return Math.floor(index / 2);
  }
  leftIndex(index: number): number {
    return index * 2;
  }
  rightIndex(index: number): number {
    return index * 2 + 1;
  }
  minIndex(index: number): number {
    const leftIdx = this.leftIndex(index);
    const rightIdx = this.rightIndex(index);
    if (!this.heap[rightIdx]) {
      return leftIdx;
    } else {
      if (this.heap[leftIdx] < this.heap[rightIdx]) {
        return leftIdx;
      } else {
        return rightIdx;
      }
    }
  }

  // swap
  swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // heapify
  heapifyUp(index: number): void {
    while (this.parentIndex(index) > 0) {
      const parentIdx = this.parentIndex(index);
      if (this.heap[index] < this.heap[parentIdx]) {
        this.swap(index, parentIdx);
      }
      index = parentIdx;
    }
  }
  heapifyDown(index: number): void {
    while (this.leftIndex(index) <= this.size) {
      const minIdx = this.minIndex(index);
      if (this.heap[index] > this.heap[minIdx]) {
        this.swap(index, minIdx);
      }
      index = minIdx;
    }
  }

  // ==add===
  add(element: number): void {
    this.heap.push(element);
    this.size++;
    this.heapifyUp(this.size);
  }

  // ===shift===
  shift(): number | null {
    if (this.size === 0) return null;

    const minEl = this.heap[1];
    const lastEl = this.heap.pop();
    this.size--;
    if (lastEl && this.size >= 1) {
      this.heap[1] = lastEl;
      this.heapifyDown(1);
    }
    return minEl;
  }
}

class MaxHeap {
  heap: number[] = [NaN];
  size: number = 0;

  // getIndex
  parentIndex(index: number): number {
    return Math.floor(index / 2);
  }
  leftIndex(index: number): number {
    return index * 2;
  }
  rightIndex(index: number): number {
    return index * 2 + 1;
  }
  maxIndex(index: number): number {
    const leftIdx = this.leftIndex(index);
    const rightIdx = this.rightIndex(index);
    if (!this.heap[rightIdx]) {
      return leftIdx;
    } else {
      if (this.heap[leftIdx] > this.heap[rightIdx]) {
        return leftIdx;
      } else {
        return rightIdx;
      }
    }
  }

  // swap
  swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  // heapify
  /**
   *下から上にヒープを再構成(大きいものを上に持っていく)
   */
  heapifyUp(index: number): void {
    while (this.parentIndex(index) > 0) {
      const parentIdx = this.parentIndex(index);
      if (this.heap[index] > this.heap[parentIdx]) {
        this.swap(index, parentIdx);
      }
      index = parentIdx;
    }
  }
  /**
   *上から下にヒープを再構成(小さいものが適切な場所にくるまで下方向に持っていく)
   */
  heapifyDown(index: number): void {
    while (this.leftIndex(index) < this.size) {
      const maxIdx = this.maxIndex(index);
      if (this.heap[index] < this.heap[maxIdx]) {
        this.swap(index, maxIdx);
      }
      index = maxIdx;
    }
  }

  // ===add===
  add(element: number): void {
    this.heap.push(element);
    this.size++;
    this.heapifyUp(this.size);
  }

  // ===shift===
  shift(element: number): number | null {
    if (this.size === 0) return null;

    const maxEl = this.heap[1];
    const lastEl = this.heap.pop();
    this.size--;
    if (lastEl && this.size >= 1) {
      this.heap[1] = lastEl;
      this.heapifyDown(1);
    }

    return maxEl;
  }
}
export {};
