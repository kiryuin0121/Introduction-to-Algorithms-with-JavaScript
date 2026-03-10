class RingBuffer<T> {
  buffer: (T | undefined)[];
  // 最大容量
  capacity: number;
  // 次に読み出す位置(dequeの対象)
  head: number = 0;
  // 次に書き込む位置(enqueの対象)
  tail: number = 0;
  // 現在の使用サイズ
  size: number = 0;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.buffer = new Array<T | undefined>(capacity);
  }
  enque(item: T) {
    // 1:ringBufferが満杯の場合
    if (this.size === this.capacity) {
      return;
    }

    // 2:ringBufferに格納スペースがある場合
    this.buffer[this.head] = item;
    //tailを次の位置に進める。(循環的),使用サイズを加算。
    this.tail = (this.tail + 1) % this.capacity;
    this.size++;
  }

  deque() {
    // 1:ringBufferが空の場合
    if (this.size === 0) {
      return;
    }
    // 2:ringBufferに要素が格納されている場合
    const ret = this.buffer[this.head];
    this.buffer[this.head] = undefined;
    // headを次の位置に進める(循環的),使用サイズを減算。
    this.head = (this.head - 1) % this.capacity;
    this.size--;
    return ret;
  }
}
const ringBuffer = new RingBuffer(3);
