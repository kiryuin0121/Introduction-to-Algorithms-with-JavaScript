class ListNode {
  value: number;
  prev: ListNode | null = null;
  next: ListNode | null = null;
  constructor(
    value: number,
    prevNode: ListNode | null = null,
    nextNode: ListNode | null = null
  ) {
    this.value = value;
    this.prev = prevNode;
    this.next = nextNode;
  }
}

class DoublyLinkedList {
  head: ListNode | null = null;

  // 追加
  append(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode: ListNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    newNode.prev = currentNode;
  }
  // 挿入
  insert(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
  // 削除
  remove(value: number) {
    let currentNode = this.head;
    // index=0
    if (currentNode && currentNode?.value === value) {
      if (!currentNode.next) {
        this.head = null;
      } else {
        const nextNode = currentNode.next;
        nextNode.prev = null;
        this.head = currentNode.next;
      }
    }
    // index>=1
    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      return;
    }

    if (currentNode.prev && !currentNode.next) {
      // index=last
      const prevNode = currentNode.prev;
      prevNode.next = null;
      return;
    } else if (currentNode.prev && currentNode.next) {
      // 1<=index<last
      const prevNode = currentNode.prev;
      const nextNode = currentNode.next;
      prevNode.next = nextNode;
      nextNode.prev = currentNode;
      return;
    }
  }
  // 反転
  reverse(): void {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      currentNode.prev = nextNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode;
  }
  // 反転(再帰)
  reverseR() {
    const reverseNode = (currentNode: ListNode | null) => {
      if (currentNode === null) {
        return null;
      }
      const previousNode = currentNode.prev;
      const nextNode = currentNode.next;

      currentNode.next = previousNode;
      currentNode.prev = nextNode;

      if (currentNode.prev === null) {
        return currentNode;
      }

      return reverseNode(currentNode.prev);
    };
    this.head = reverseNode(this.head);
  }

  print(): void {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.insert(0);
list.print();
console.log();
// list.remove(0);
// list.remove(3);
// list.print();
list.reverse();
list.print();
console.log();
list.reverseR();
list.print();
