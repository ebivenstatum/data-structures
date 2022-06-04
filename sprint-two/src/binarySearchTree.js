var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  newTree.left;
  newTree.right;
  return newTree;
};

BinarySearchTree.prototype.insert = function(value) {

  if (this.value === undefined) {
    this.value = value;
    return;
  } else {
    if (this.value < value) {
      if (this.right === undefined) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else {
      if (this.left === undefined) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  }
  return;

}

BinarySearchTree.prototype.contains = function(target) {

  var output = false;

  if (this.value === target) {
    output = true;
  } else if ( target > this.value && this.right !== undefined) {
    output = this.right.contains(target);
  } else if (target < this.value && this.left !== undefined) {
    output = this.left.contains(target);
  }

  return output;

}

BinarySearchTree.prototype.depthFirstLog = function(func) {

  func(this.value);

  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
  return func;


}

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */ insert: O(logn)
//  */ contains: O(logn)
//  */ depthFirstLog: O(n)

