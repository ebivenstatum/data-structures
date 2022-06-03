var BinarySearchTree = function(value) {
  var BinarySearchTree = {};
  BinarySearchTree.value = value;
  BinarySearchTree.left = {};
  BinarySearchTree.right = {};
  BinarySearchTree = _.extend(BinarySearchTree, binarySearchTreeMethods);

  return BinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {

  /*if (!this.value) {
    this.value = value;
    return;
  } else {*/
    /**
     * base case:
     *  current value is not assigned, then assign value to current tree
     *  return
     * accumlate case:
     *  if right child exist && current > input value
     *      go to right child
     *  else value greater than current value && left child exist
     *      got to left child
     */

    if (this.left !== undefined && value < this.value/*this.right*/) {

        //if (value < this.right.value) {
          var leftChild = BinarySearchTree(this.left);
          leftChild.insert(value);
        //}

    } else if (this.right !== undefined && value > this.value ) {
        var rightChild = BinarySearchTree(this.right);
        rightChild.insert(value);
    } else {

      // NOTE: WORK ON THIS TOMORROW
     if (value > this.value) {
        var rightChild = BinarySearchTree(value);
        console.log(rightChild);
        this.right = rightChild;
     }

     if (value < this.value) {
        var leftChild = BinarySearchTree(value);
        console.log(leftChild);
        this.left = leftChild;
     }
    }


  //}

  //return

};

binarySearchTreeMethods.contains = function() {

};

binarySearchTreeMethods.depthFirstLog = function () {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
