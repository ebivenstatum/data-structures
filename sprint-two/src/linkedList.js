var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    /**
     * create a new node;
   * let our tail point to the new node
     * let our tail become new node's next node
     * so tail is always the last element
     *
     */
     var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;

    } else {
      list.tail.next = newNode.next;
      list.tail = newNode;
      list.head.next = list.tail;

    //removeHead = first element of linked list
  }

  };

  list.removeHead = function() {

   //list head -> 2nd element of linked list
    const removedHead = list.head;

    if (!removedHead) {
      return;
    }
    //console.log(list.head.next);

    if (list.head.next !== null) {
      list.head = list.head.next;

    }

    return removedHead.value;

  };

  list.contains = function(target) {

    var output = false;

    _.each(list, function(element) {
      if ( element.value === target ) {
        output = true;
      }
    });
    return output;

    //return boolean reflecting whether or not the passed-in value is in the linked list

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
