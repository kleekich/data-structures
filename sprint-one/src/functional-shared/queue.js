var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
  	i: 0,
  	o: 0,
  	storage : {}
  };
  _.extend(instance, Queue.queueMethods);
  return instance;
};

Queue.queueMethods = {

	enqueue: function(item){
		this.storage[this.i] = item;
		this.i++;
	},
	dequeue: function(){
		var dequeued = this.storage[this.o];
		delete this.storage[this.o];
		this.o++;
		return dequeued;
	},
	size: function(){
		return Object.keys(this.storage).length;
	}
};



