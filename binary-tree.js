/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    let currLayer = 1;

    if (!node) return 0;

    let toVisitQueue = [[node, currLayer]];

    while (toVisitQueue.length) {
      let [current, currLayer] = toVisitQueue.shift();

      debugger;
      if (!current.left && !current.right) {
        return currLayer;
      };

      current.left ?
        toVisitQueue.push([current.left, currLayer + 1])
        : null;
      current.right ?
        toVisitQueue.push([current.right, currLayer + 1])
        : null;
    }
    return currLayer;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    let currLayer = 1;
    let maxDepth = 1;

    if (!node) return 0;

    let toVisitStack = [[node, currLayer]];

    while (toVisitStack.length) {
      let [current, currLayer] = toVisitStack.pop();

      if (!current.left && !current.right && currLayer > maxDepth) {
        maxDepth = currLayer;
      }
      current.left ?
        toVisitStack.push([current.left, currLayer + 1])
        : null;
      current.right ?
        toVisitStack.push([current.right, currLayer + 1])
        : null;

    }

    return maxDepth;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {

    //if > lowerbound -> currMin = current node's value
    //loop throughout and see if it's smaller currMin and larger than lowerBound
    //if so replace currMin and keep going
    //if not return currMin
    if (!node) return null;
    let currMin = Infinity;
    let toVisitStack = [node];
    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if(current.val < currMin && current.val > lowerBound) {
        currMin = current.val
      }

      current.left ?
        toVisitStack.push(current.left)
        : null;
      current.right ?
        toVisitStack.push(current.right)
        : null;

    }
    if (currMin === Infinity) return null;
    return currMin;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
