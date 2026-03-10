class ListNode {
  value: number;
  next: ListNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}
class SinglyLinkedList {
  head: ListNode | null = null;
  // 末尾に追加
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
  }
  // 先頭に追加
  prepend(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }
  //途中に追加
  insert(value: number, index: number) {
    const newNode = new ListNode(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode && currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (!currentNode) return;

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 検索
  find(value: number): boolean {
    let currentNode = this.head;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  // 削除
  remove(value: number): void {
    let currentNode = this.head;

    // 先頭を削除
    if (currentNode && currentNode.value === value) {
      this.head = currentNode.next;
      return;
    }

    // それ以外の場所を探索
    let previousNode: ListNode | null = null;
    while (currentNode && currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (!currentNode || !previousNode) {
      return;
    }

    previousNode.next = currentNode.next;
  }
  // 反転
  reverse(): void {
    let previousNode: ListNode | null = null;
    let currentNode = this.head;

    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.head = previousNode;
  }
  // 反転(再帰)

  reverseR(): void {
    const reverseNode = (
      currentNode: ListNode | null,
      previousNode: ListNode | null
    ) => {
      if (currentNode === null) {
        return previousNode;
      }
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
      reverseNode(currentNode, previousNode);
    };

    this.head = reverseNode(this.head, null) as ListNode;
  }
  // print
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

export {};
