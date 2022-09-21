/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  //Breadth
  sumValues() {
    let sum = 0;

    if (!this.root) return 0;

    let toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      sum += current.val;

      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  //Depth
  countEvens() {
    let evenNodes = 0;

    if (!this.root) return 0;

    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val % 2 === 0) evenNodes++;

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return evenNodes;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let greaterThanX = 0;

    if (!this.root) return 0;

    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val > lowerBound) greaterThanX++;

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return greaterThanX;
  }
}

module.exports = { Tree, TreeNode };
