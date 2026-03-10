class MiniHeap {
  heap: number[] = [NaN];
  heapSize: number = 0;
  // getIndex
  parentIndex(idx: number) {
    return Math.floor(idx / 2);
  }
  leftChildIndex(idx: number) {
    return idx * 2;
  }
  rightChildIndex(idx: number) {
    return idx * 2 + 1;
  }
  minChildIndex(idx: number) {
    const leftChildIdx = this.leftChildIndex(idx);
    const rightChildIdx = this.rightChildIndex(idx);
    if (rightChildIdx > this.heapSize) {
      return leftChildIdx;
    } else {
      if (this.heap[leftChildIdx] < this.heap[rightChildIdx]) {
        return leftChildIdx;
      } else {
        return rightChildIdx;
      }
    }
  }
  swap(idx1: number, idx2: number) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  // heapify
  heapifyUp(idx: number) {
    while (this.parentIndex(idx) > 0) {
      const parentIdx = this.parentIndex(idx);
      if (this.heap[idx] < this.heap[parentIdx]) {
        this.swap(idx, parentIdx);
      }
      idx = parentIdx;
    }
  }
  heapifyDown(idx: number) {
    while (this.leftChildIndex(idx) <= this.heapSize) {
      const minChildIdx = this.minChildIndex(idx);
      if (this.heap[idx] > this.heap[minChildIdx]) {
        this.swap(idx, minChildIdx);
      }
      idx = minChildIdx;
    }
  }
  // ==add==
  add(el: number) {
    this.heap.push(el);
    this.heapSize++;
    this.heapifyUp(this.heapSize);
  }
  // ==shift==
  shift() {
    if (this.heapSize === 0) return;

    const firstEl = this.heap[1];
    const lastEl = this.heap.pop() as number;
    this.heapSize--;
    if (this.heapSize === 0) {
      return lastEl;
    }
    this.heap[1] = lastEl;
    this.heapifyDown(1);

    return firstEl;
  }
}
