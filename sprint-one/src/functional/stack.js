// Do not use new, this, or any prototype chains

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.push = function(value) {

    var index = 0;

    while ( someInstance[index] ) { index++; }

    someInstance[index] = value;

  };

  someInstance.pop = function() {

    if( someInstance.size() > 0 ) {

      var index = 0;

      while ( someInstance[index] !== undefined ) { index++; }

      var popped = someInstance[index - 1];
      someInstance[index - 1] = undefined;

      return popped;

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
