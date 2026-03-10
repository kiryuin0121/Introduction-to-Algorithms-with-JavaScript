type TN = TreeNode | null;
class TreeNode {
  value: number;
  leftNode: TN = null;
  rightNode: TN = null;
  constructor(value: number) {
    this.value = value;
  }
}
class BinarySearchTree {
  root: TN = null;
  // ==add==
  add(targetVal: number) {
    const targetNode = new TreeNode(targetVal);
    const _add = (node: TN, targetNode: TreeNode) => {
      if (!node) return targetNode;

      if (node.value > targetNode.value) {
        node.leftNode = _add(node.leftNode, targetNode);
      } else {
        node.rightNode = _add(node.rightNode, targetNode);
      }

      return node;
    };
    this.root = _add(this.root, targetNode);
  }
  // ==traversal==
  // dfs
  inOrder() {
    const _inOrder = (node: TN) => {
      if (!node) return node;

      _inOrder(node.leftNode);
      console.log(node.value);
      _inOrder(node.rightNode);
    };
    _inOrder(this.root);
  }
  preOrder() {
    const _preOrder = (node: TN) => {
      if (!node) return node;

      console.log(node.value);
      _preOrder(node.leftNode);
      _preOrder(node.rightNode);
    };
    _preOrder(this.root);
  }
  postOrder() {
    const _postOrder = (node: TN) => {
      if (!node) return node;

      _postOrder(node.leftNode);
      _postOrder(node.rightNode);
      console.log(node.value);
    };
    _postOrder(this.root);
  }
  // bfs
  bfs() {
    const queue: TreeNode[] = [];
    if (this.root) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      const currentNode = queue.shift() as TreeNode;
      console.log(currentNode.value);
      if (currentNode.leftNode) {
        queue.push(currentNode.leftNode);
      }
      if (currentNode?.rightNode) {
        queue.push(currentNode.rightNode);
      }
    }
  }
  // ==search==
  search(targetVal: number) {
    const _search = (node: TN, targetVal: number) => {
      if (!node) return false;

      if (node.value === targetVal) {
        return true;
      } else if (node.value > targetVal) {
        return _search(node.leftNode, targetVal);
      } else {
        return _search(node.rightNode, targetVal);
      }
    };
    return _search(this.root, targetVal);
  }
  // ==remove==
  remove(targetVal: number) {
    const _getMinNode = (node: TreeNode): TreeNode => {
      let currentNode = node;
      while (currentNode.leftNode) {
        currentNode = currentNode.leftNode;
      }
      return currentNode;
    };
    const _remove = (node: TN, targetVal: number) => {
      if (!node) return node;

      // 削除対象を探索
      if (node.value > targetVal) {
        node.leftNode = _remove(node.leftNode, targetVal);
      } else if (node.value < targetVal) {
        node.rightNode = _remove(node.rightNode, targetVal);
      } else {
        // 削除処理

        // 子ノードが左右いずれかにしか存在しないパターン
        if (!node.leftNode) {
          return node.rightNode;
        }
        if (!node.rightNode) {
          return node.leftNode;
        }
        // 子ノードが左右両方に存在するパターン
        const substituteNode = _getMinNode(node.rightNode);
        node.value = substituteNode.value;
        node.rightNode = _remove(node.rightNode, substituteNode.value);
      }

      return node;
    };

    this.root = _remove(this.root, targetVal);
  }
}

export {};
