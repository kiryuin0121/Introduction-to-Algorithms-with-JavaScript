// ==1==
// 7/23:△(bfs,remove)
// 7/24:〇
type TN = ThreeNode | null;
class ThreeNode {
  value: number;
  leftNode: TN = null;
  rightNode: TN = null;
  constructor(value: number) {
    this.value = value;
  }
}
class BinarySearchTree {
  rootNode: TN = null;

  // ==add==
  add(targetValue: number) {
    const targetNode: TN = new ThreeNode(targetValue);
    const _add = (node: TN, targetNode: TN): TN => {
      if (!node) return targetNode;
      if (targetNode && node.value > targetNode.value) {
        node.leftNode = _add(node.leftNode, targetNode);
      } else {
        node.rightNode = _add(node.rightNode, targetNode);
      }
      return node;
    };
    this.rootNode = _add(this.rootNode, targetNode);
  }
  // ==traversal==
  // DFS
  inOrder() {
    const _inOrder = (node: TN) => {
      if (!node) return;
      _inOrder(node.leftNode);
      console.log(node.value);
      _inOrder(node.rightNode);
    };
    _inOrder(this.rootNode);
  }
  preOrder() {
    const _preOrder = (node: TN) => {
      if (!node) return;
      console.log(node.value);
      _preOrder(node.leftNode);
      _preOrder(node.rightNode);
    };
    _preOrder(this.rootNode);
  }
  postOrder() {
    const _postOrder = (node: TN) => {
      if (!node) return;
      _postOrder(node.leftNode);
      _postOrder(node.rightNode);
      console.log(node.value);
    };
    _postOrder(this.rootNode);
  }

  // BFS
  bfs() {
    const queue: TN[] = [];
    if (this.rootNode) {
      queue.push(this.rootNode);
    } else {
      return;
    }
    while (queue.length > 0) {
      const currentNode = queue.shift() as ThreeNode;
      console.log(currentNode.value);
      if (currentNode.leftNode) queue.push(currentNode.leftNode);
      if (currentNode.rightNode) queue.push(currentNode.rightNode);
    }
  }
  // ==search==
  search(targetValue: number) {
    const _search = (node: TN, targetValue: number) => {
      if (!node) return false;
      if (node.value === targetValue) {
        return true;
      } else if (node.value > targetValue) {
        return _search(node.leftNode, targetValue);
      } else {
        return _search(node.rightNode, targetValue);
      }
    };
    return _search(this.rootNode, targetValue);
  }
  // ==remove==
  remove(targetValue: number) {
    const _remove = (node: TN, targetValue: number) => {
      if (!node) return node;

      if (node.value > targetValue) {
        node.leftNode = _remove(node.leftNode, targetValue);
      } else if (node.value < targetValue) {
        node.rightNode = _remove(node.rightNode, targetValue);
      } else {
        if (!node.leftNode) {
          return node.rightNode;
        }
        if (!node.rightNode) {
          return node.leftNode;
        }

        const substituteNode = _getMinNode(node.rightNode);
        node.value = substituteNode.value;
        node.rightNode = _remove(node.rightNode, substituteNode.value);
      }
      return node;
    };
    const _getMinNode = (node: ThreeNode): ThreeNode => {
      let currentNode: ThreeNode = node;
      while (currentNode.leftNode) {
        currentNode = currentNode.leftNode;
      }
      return currentNode;
    };
    this.rootNode = _remove(this.rootNode, targetValue);
  }
}
// ==2==
class MaxHeap {
  heap: number[] = [NaN];
  heapSize: number = 0;
  // add

  // pop
}
export {};
