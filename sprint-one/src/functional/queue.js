// Do not use new, this, or any prototype chains

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {

    var index = 0;

    while ( someInstance[index] ) { index++; }

    someInstance[index] = value;

  };

  someInstance.dequeue = function() {

    if( someInstance.size() > 0 ) {

      var dequeued = someInstance[0];

      var index = 1;

      while ( someInstance[index - 1] !== undefined ) {

        someInstance[index - 1] = someInstance[index];
        index++;

      }

      return dequeued;

    } else {

      return;

    }

  };

  someInstance.size = function() {

    var len = 0;

    while ( someInstance[len] ) { len++; }

    return len;

  };

  return someInstance;

};
