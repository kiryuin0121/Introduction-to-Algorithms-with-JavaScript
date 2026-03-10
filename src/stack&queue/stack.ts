class Stack {
  stack: number[] = [];
  push(value: number) {
    this.stack.push(value);
  }
  pop() {
    return this.stack.pop();
  }
}
const stack = new Stack();
console.log(stack);
console.log();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log();
for (let i = 0; i < 4; i++) {
  console.log(stack.pop());
}
