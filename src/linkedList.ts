// ==1==
// 7/22:△
// 7/24:〇
type SLN = SinglyListNode | null;
class SinglyListNode {
  value: number;
  next: SLN = null;
  constructor(value: number) {
    this.value = value;
  }
}
class SinglyLinkedList {
  head: SLN = null;
  // prepend
  prepend(value: number) {
    const newNode = new SinglyListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  // append
  append(value: number) {
    const newNode = new SinglyListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode: SLN = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  // remove
  remove(target: number) {
    if (!this.head) {
      //ノードが存在しない場合
      return false;
    }
    let currentNode: SLN = this.head;
    if (currentNode.value === target) {
      //先頭のノードを削除するパターン
      if (currentNode.next) {
        //後続するノードが存在するケース
        this.head = currentNode.next;
        return true;
      } else {
        //先頭のノードだけが存在していたケース
        this.head = null;
        return true;
      }
    }
    let previousNode: SLN = null;
    while (currentNode && currentNode.value !== target) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      //削除対象が存在しないパターン
      return false;
    }

    // 先頭より後方のノードを削除するパターン
    if (previousNode && currentNode.next) {
      //中間のノードを削除するケース
      previousNode.next = currentNode.next;
      return true;
    } else if (previousNode) {
      //末尾のノードを削除するケース
      previousNode.next = null;
      return true;
    }
  }
}
// ==2==
// 7/22:△
// 7/24:〇
type DLN = DoublyListNode | null;
class DoublyListNode {
  value: number;
  prev: DLN = null;
  next: DLN = null;
  constructor(value: number) {
    this.value = value;
  }
}
class DoublyLinkedList {
  head: DLN = null;
  // prepend
  prepend(value: number) {
    const newNode = new DoublyListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  // append
  append(value: number) {
    const newNode = new DoublyListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode: DLN = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    newNode.prev = currentNode;
    currentNode.next = newNode;
  }
  // remove
  remove(target: number) {
    // 論外すなわちノードが存在しないパターン
    if (!this.head) {
      return false;
    }
    let currentNode: DLN = this.head;
    // 先頭のノードを削除するパターン
    if (currentNode.value === target) {
      if (currentNode.next) {
        //後続するノードが存在するケース
        currentNode.next.prev = null;
        this.head = currentNode.next;
        return true;
      } else {
        //listに削除対象のノードのみが存在していたケース
        this.head = null;
        return true;
      }
    }
    while (currentNode && currentNode.value !== target) {
      currentNode = currentNode.next;
    }
    // 削除対象が見つからなかったパターン
    if (!currentNode) {
      return false;
    }
    // 先頭より後方のノードを削除するパターン
    if (currentNode.next) {
      //後続のノードが存在するケースすなわち中間のノードを削除するケース
      currentNode.next.prev = currentNode.prev;
      currentNode.prev!.next = currentNode.next;
      return true;
    } else {
      //末尾のノードを削除するケース
      currentNode.prev!.next = null;
      return true;
    }
  }
}
export {};
