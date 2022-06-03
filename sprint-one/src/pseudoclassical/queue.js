var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this;

};

Queue.prototype.enqueue = function(value) {

  var index = 0;

  while ( this[index] ) { index++; }

  return this[index] = value;

};

Queue.prototype.dequeue = function() {

  if( this.size() > 0 ) {

    var dequeued = this[0];

    var index = 1;

    while ( this[index - 1] !== undefined ) {

      this[index - 1] = this[index];
      index++;

    }

    return dequeued;

  } else {

    return {};

  }

};

Queue.prototype.size = function() {

  var len = 0;

  while ( this[len] ) { len++; }

  return len;

};


