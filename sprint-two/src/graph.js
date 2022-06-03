

// Instantiate a new graph
var Graph = function() {

  // all nodes in graph
  this.edges = {};
  this.elements = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //var newNode = node;
  //this.node = node;

  //var newNode = {value: node, edges: []};

  this.elements.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  var output = false;

  if (this.elements.length > 0) {

    _.each(this.elements, function(item) {
      if (item  === node) {
        output = true;
      }
    });

  }

  return output;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  if (_.contains(this.elements, node)) {
    delete this.edges[node];
    _.each(this.edges[node], function(item) {
      if (_.contains(this.edges[item], node)) {
        var index = _.indexOf(this.edges[item], mpde);
        delete this.edges[item][index];
      }

    });
  }

  var index = _.indexOf(this.elements, node);
  /*var counter = 0;

  _.each(this.elements, function(item) {

    if (item === node) {

      index = counter;

    }

    counter++;

  });*/

  if ( index === -1) {

    return;

  } else {

    return this.elements = this.elements.slice(0, index).concat(this.elements.slice(index + 1, this.elements.length));

  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {


  //console.log(fromNode);

  /*var index;
  var counter = 0;

  _.each(this.elements, function(item) {

    if (item.value === fromNode) {

      index = counter;

    }

    counter++;

  });*/

  if ( _.contains(this.edges[fromNode], toNode) &&  _.contains(this.edges[toNode], fromNode) ) {
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  if ( _.contains(this.elements, fromNode) && _.contains(this.elements, toNode)) {
    /*var fromIndex = 0;
    //var toIndex = counter;
    var toIndex = 0;
    var counter = 0;

    _.each(this.elements, function(item) {

      if (item === toNode) {

        toIndex = counter;

      }
      if (item === fromNode) {

        fromIndex = counter;
     }

    counter++;
  })*/

  return this.edges[toNode].push(fromNode), this.edges[fromNode].push(toNode);
}

};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  if (_.contains(this.edges[fromNode], toNode)) {
    var index = _.indexOf(this.edges[fromNode], toNode);
    delete this.edges[fromNode][index];
  }

  if (_.contains(this.edges[toNode], fromNode)) {
    var index = _.indexOf(this.edges[toNode], fromNode);
    delete this.edges[toNode][index];
  }

  /**
   * create two boolean containsFromNode and containsToNdoe
   *  if containsFromNdoe
   *    get the fromNode Index
   *    containsFromNode is true
   *
   * if containsToNdoe
   *    get the ToNdoe Index
   *    containsToNdoe is true
   *
   * if containsFromNode is true
   *  go to that elemnt
   *
   */

  // if ( this.contains(fromNode) && this.contains(toNode)) {
  //   var fromIndex = 0;
  //   var toIndex = 0
  //   var counter = 0;

  //   _.each(this.elements, function(item) {

  //   if (item.value === toNode) {

  //     toIndex = counter;

  //   } else if (item.value === fromNode) {

  //     fromIndex = counter;
  //   }

  //   counter++;
  // });

  /*var containsFromNode = false;
  var containsToNode = false;

  if ( this.contains(fromNode)) {
    var fromIndex = 0;
    var toIndex = 0
    var counter = 0;

    _.each(this.elements, function(item) {

    if (item.value === fromNode) {

      fromIndex = counter;
      containsFromNode = true;
    }
    counter++;
  });


  if (this.contains(toNode)) {
    var fromIndex = 0;
    var toIndex = 0
    var counter = 0;

    _.each(this.elements, function(item) {

    if (item.value === toNode) {

      toIndex = counter;
      containsToNode = true;
    }
    counter++;
  });


  if (_.contains(this.elements[fromIndex].edges, toNode) && containsFromNode) {
    this.elements[fromIndex].edges = _.filter(this.elements[fromIndex].edges, function(item) {
      return item !== toNode;
    });

  }

  if (_.contains(this.elements[toIndex].edges, fromNode) && containsToNode) {
    this.elements[toIndex].edges = _.filter(this.elements[toIndex].edges, function(item) {
      return item !== fromNode;
    });

   }
  } else if (this.contains(fromNode)) {
    var fromIndex = 0;
    var counter = 0;

    _.each(this.elements, function(item) {

      if (item.value === fromNode) {

        fromIndex = counter;
      }

      counter++;
    });

    if (_.contains(this.elements[toIndex].edges, fromNode)) {
      this.elements[toIndex].edges = _.filter(this.elements[toIndex].edges, function(item) {
        return item !== fromNode;
      });

     }

  }
  }*/



};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  _.each(this.elements, function(item) {
    return cb(item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


