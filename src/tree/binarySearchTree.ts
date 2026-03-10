class ThreeNode {
  value: number;
  left: ThreeNode | null = null;
  right: ThreeNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

// class BinarySearchTree {

// }

// add
const insert = (node: ThreeNode | null, value: number) => {
  if (node === null) {
    return new ThreeNode(value);
  }
  if (value < node.value) {
    node.left = insert(node.left, value);
  } else {
    node.right = insert(node.right, value);
  }
  return node;
};
// traversal
const inOrder = (node: ThreeNode | null) => {
  if (node === null) return;
  // left,root,right
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
};
const preOrder = (node: ThreeNode | null) => {
  if (node === null) return;
  // root,left,right
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
};
const postOrder = (node: ThreeNode | null) => {
  if (node === null) return;
  // left,right,root
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
};
// search
const search = (node: ThreeNode | null, value: number) => {
  if (node === null) return false;

  if (value === node.value) {
    return true;
  } else if (value < node.value) {
    return search(node.left, value);
  } else {
    return search(node.right, value);
  }
};
// delete
const remove = (node: ThreeNode | null, value: number) => {
  if (node === null) return null;

  // if-elseif:削除対象を探索、else:削除対象を発見
  if (value < node.value) {
    node.left = remove(node.left, value);
  } else if (value > node.value) {
    node.right = remove(node.right, value);
  } else {
    // 1:削除対象のノードの子が1つの場合は存在するノードを移植
    if (!node.left) {
      return node.right;
    } else if (!node.right) {
      return node.left;
    }
    // 2:削除対象のノードの子が2つある場合は右の子孫のうち最小の値を持つノードを移植
    const minNode = findMin(node.right);
    node.value = minNode.value;
    node.right = remove(node.right, minNode.value);
  }
  return node;
};
const findMin = (node: ThreeNode) => {
  let currentNode = node;
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode;
};

let root = insert(null, 3);
root = insert(root, 6);
root = insert(root, 5);
root = insert(root, 7);
root = insert(root, 1);
root = insert(root, 10);
root = insert(root, 2);
// inOrder(root);
// preOrder(root);
// postOrder(root);
console.log(search(root, 4));
