var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = {};

  newQueue = _.extend(newQueue, queueMethods);

  return newQueue;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {

  var index = 0;

  while ( this[index] ) { index++; }

  return this[index] = value;

};

queueMethods.dequeue = function() {

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

queueMethods.size = function() {

  var len = 0;

  while ( this[len] ) { len++; }

  return len;

};


