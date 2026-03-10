class Queue {
  queue: number[] = [];

  enqueue(value: number) {
    this.queue.push(value);
  }
  dequeue() {
    return this.queue.shift();
  }
}

const queue = new Queue();
console.log(queue);
console.log();
for (let i = 0; i < 4; i++) {
  queue.enqueue(i);
}
console.log(queue);
console.log();
for (let j = 0; j < 4; j++) {
  console.log(queue.dequeue());
}
