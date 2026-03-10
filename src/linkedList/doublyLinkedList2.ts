class ListNode {
  value: number;
  prev: ListNode | null = null;
  next: ListNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

class DoublyLinkedList {
  head: ListNode | null = null;
  append(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    newNode.prev = currentNode;
  }
  prepend(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
  remove(value: number) {
    let currentNode: ListNode | null = this.head;

    //1:先頭に位置するノードを削除する場合
    if (currentNode && value === currentNode.value) {
      // 1-1:後続するノードがない場合
      if (!currentNode.next) {
        this.head = null;
        return;
      } else {
        // 1-2:後続するノードがある場合
        const nextNode = currentNode.next;
        nextNode.prev = null;
        this.head = nextNode;
        return;
      }
    }
    // 2:先頭より後ろに位置するノードを削除する場合
    let previousNode: ListNode | null = null;
    // 削除するノードを探索
    while (currentNode && value !== currentNode.value) {
      currentNode = currentNode.next;
    }
    // 最後まで探索した場合(失敗)
    if (!currentNode) {
      return;
    }

    // 最後に位置する!ノードを削除する場合
    if (currentNode.prev && !currentNode.next) {
      const previousNode: ListNode = currentNode.prev;
      previousNode.next = null;
    } else if (currentNode.prev && currentNode.next) {
      // 中間に位置するノードを削除する場合
      const nextNode = currentNode.next;
      const previousNode = currentNode.prev;

      nextNode.prev = previousNode;
      previousNode.next = nextNode;
      return;
    }
  }
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
export {};
