var Queue = function() {
  //FIFO
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //Create indexes for out and in index
  var o = 0;
  var i = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[i] = value;
    i++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[o];
    delete storage[o];
    o++;
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
