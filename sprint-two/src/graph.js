

// Instantiate a new graph
var Graph = function() {

  // all nodes in graph
  this.edges = {};
  this.elements = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {


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


  if ( index === -1) {

    return;

  } else {

    return this.elements = this.elements.slice(0, index).concat(this.elements.slice(index + 1, this.elements.length));

  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {


  if ( _.contains(this.edges[fromNode], toNode) &&  _.contains(this.edges[toNode], fromNode) ) {
    return true;
  } else {
    return false;

  }

};
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  if ( _.contains(this.elements, fromNode) && _.contains(this.elements, toNode)) {

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



};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  _.each(this.elements, function(item) {
    return cb(item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(n)
 * removeNode: O(n^2)
 * hasEdge: O(n)
 * addEdge: O(n)
 * removeEdge: O(n^2)
 * forEachNode: O(n)
 */


