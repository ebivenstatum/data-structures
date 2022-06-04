var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  if (_.contains(this._storage, item)) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  if (_.contains(this._storage, item)) {
    var index = _.indexOf(this._storage, item);
  }

  delete this._storage[index];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 * contains: O(n)
 * remove: O(n^2)
 */
