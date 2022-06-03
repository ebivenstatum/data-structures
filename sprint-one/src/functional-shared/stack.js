// Use the keyword this, use _.extend to copy the methods onto the instance
// Don't use new or prototype chains

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {};

  newStack = _.extend(newStack, stackMethods);

  return newStack;

};

var stackMethods = {};

stackMethods.push = function(value) {

  var index = 0;

  while ( this[index] ) { index++; };

  return this[index] = value;

};

stackMethods.pop = function() {

  if ( this.size() > 0 ) {

    var index = 0;

    while ( this[index] !== undefined ) { index++; }

    var popped = this[index - 1];

    return this[index - 1] = undefined, popped;

  } else {

    return {};

  }

};

stackMethods.size = function() {

  var len = 0;

  while ( this[len] ) { len++; }

  return len;

};






