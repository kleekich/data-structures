var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.i = 0;
  this.o = 0;
};

Queue.prototype.enqueue = function(item){
	this.storage[this.i++] = item;
}
Queue.prototype.dequeue = function(){
	var dequeued = this.storage[this.o];
	delete this.storage[this.o++];
	return dequeued;
}
Queue.prototype.size = function(){
	return Object.keys(this.storage).length;
}



