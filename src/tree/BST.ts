class ThreeNode {
  value: number;
  leftNode: ThreeNode | null = null;
  rightNode: ThreeNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}
type TN = ThreeNode | null;
class BinarySearchTree {
  rootNode: TN = null;
  // ==add==
  add(value: number) {
    const rootNode = this.rootNode;
    const _add = (node: TN, value: number) => {
      const newNode = new ThreeNode(value);

      if (!node) return newNode;

      if (value < node.value) {
        node.leftNode = _add(node.leftNode, value);
      } else {
        node.rightNode = _add(node.rightNode, value);
      }
      return node;
    };

    this.rootNode = _add(rootNode, value);
  }

  // ==travarsal==
  // DFS
  inOrder() {
    const rootNode = this.rootNode;
    const _inOrder = (node: TN) => {
      if (!node) return;

      _inOrder(node.leftNode);
      console.log(node.value);
      _inOrder(node.rightNode);
    };
    _inOrder(rootNode);
  }
  preOrder() {
    const rootNode = this.rootNode;

    const _preOrder = (node: TN) => {
      if (!node) return;

      console.log(node.value);
      _preOrder(node.leftNode);
      _preOrder(node.rightNode);
    };

    _preOrder(rootNode);
  }
  postOrder() {
    const rootNode = this.rootNode;

    const _postOrder = (node: TN) => {
      if (!node) return;

      _postOrder(node.leftNode);
      _postOrder(node.rightNode);
      console.log(node.value);
    };
    _postOrder(rootNode);
  }
  // BFS
  bfs() {
    const rootNode = this.rootNode;
    const _bfs = (node: TN) => {
      const queue: TN[] = [];
      if (node) {
        queue.push(node);
      } else {
        return;
      }
      while (queue.length > 0) {
        const currentNode = queue.shift() as ThreeNode;
        console.log(currentNode.value);
        if (currentNode.leftNode) queue.push(currentNode.leftNode);
        if (currentNode.rightNode) queue.push(currentNode.rightNode);
      }
    };
    _bfs(rootNode);
  }
  // ==search===
  search(value: number) {
    const rootNode = this.rootNode;
    const _search = (node: TN, value: number): TN => {
      if (!node) {
        console.log(`${value} is not found`);
        return null;
      }

      if (value === node.value) {
        return node;
      } else if (value < node.value) {
        return _search(node.leftNode, value);
      } else {
        return _search(node.rightNode, value);
      }
    };
    return _search(rootNode, value);
  }
  // ==remove==
  remove(value: number) {
    const rootNode = this.rootNode;
    const _remove = (node: TN, value: number) => {
      if (!node) return node;

      // 探索
      if (value < node.value) {
        node.leftNode = _remove(node.leftNode, value);
      } else if (value > node.value) {
        node.rightNode = _remove(node.rightNode, value);
      } else {
        //削除
        // 子が左右のうちいずれかに存在する場合(子の存在は保証されてるから&&以降はいらないかも)
        if (!node.leftNode && node.rightNode) return node.rightNode;
        if (!node.rightNode && node.leftNode) return node.leftNode;
        // 子が左右両方に存在する場合
        const altNode = _getMinNode(node.rightNode);
        node.value = altNode.value;
        // altNodeを消しに行く
        node.rightNode = _remove(node.rightNode, altNode.value);
      }
      return node;
    };
    const _getMinNode = (node: TN) => {
      let currentNode = node;
      while (currentNode?.leftNode) {
        currentNode = currentNode.leftNode;
      }
      return currentNode as ThreeNode;
    };
    this.rootNode = _remove(rootNode, value);
  }
}
export {};
