var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //Create a node
    var newNode = Node(value);    
    //If it is our first node
    if(list.head === null){
      //Assign head and tail to our first node
      list.head = newNode;
      list.tail = newNode;
    //otherwise,
    }else{
      //current tail points to our node
      list.tail.next = newNode;
      //Assign tail to our node
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    //If head is null return undefined
    if(list.head===null){
      return undefined;  
    //If there is only one node(if head and tail assigning to same node)
    }else if(list.head === list.tail){
      //Create a variable to return
      var res = list.head.value;
      //Delete node from list
      list.head = null;
      list.tail = null;
      //Return variable
      return res;
    //If multiple nodes
    }else{
      //Create a variable to return
      var res = list.head.value;
      //Re-assigning head to head.next
      list.head = list.head.next;
      //return variable
      return res;
    }
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
