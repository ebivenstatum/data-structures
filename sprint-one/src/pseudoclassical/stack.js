// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// use new and this
// don't declare or return instance explicitly

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this;

};

Stack.prototype.push = function(value) {

  var index = 0;

  while ( this[index] ) { index++; };

  return this[index] = value;

};

Stack.prototype.pop = function() {

  if ( this.size() > 0 ) {

    var index = 0;

    while ( this[index] !== undefined ) { index++; }

    var popped = this[index - 1];

    return this[index - 1] = undefined, popped;

  } else {

    return {};

  }

};

Stack.prototype.size = function() {

  var len = 0;

  while ( this[len] ) { len++; }

  return len;

};


