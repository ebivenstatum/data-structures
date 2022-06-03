var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree = _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  var newChild = Tree(value);
  return this.children.push(newChild);

};

treeMethods.contains = function(target) {
  var output = false;

  if (this.value === target) {

    output = true;

  } else {

    if (this.children.length > 0) {

      _.each(this.children, function(child) {

        if (child.contains(target)) {
          output = child.contains(target);

        }

      });

    }

  }

  return output;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
