// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// use new and this
// explicitly declare contructor method

class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this;
  }

  push(value) {

    var index = 0;

    while ( this[index] ) { index++; };

    return this[index] = value;

  };

  pop() {

    if ( this.size() > 0 ) {

      var index = 0;

      while ( this[index] !== undefined ) { index++; }

      var popped = this[index - 1];

      return this[index - 1] = undefined, popped;

    } else {

      return {};

    }

  };

  size() {

    var len = 0;

    while ( this[len] ) { len++; }

    return len;

  };

}