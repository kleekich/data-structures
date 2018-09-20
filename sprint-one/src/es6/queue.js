class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
  	this.storage = {}
  	this.i = 0;
  	this.o = 0;
  }

  enqueue(item){
  	this.storage[this.i++] = item;
  }
  dequeue(){
  	var dequeued = this.storage[this.o];
  	delete this.storage[this.o++];
  	return dequeued;
  }
  size(){
  	return Object.keys(this.storage).length;
  }

}
