var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // make a new node
    var newNode = makeNode(value);
    // if there is no head, set this node to the head
    if (list.head === null) {
      list.head = newNode;
    }
    // if there is a tail, set that 'next' value to this new node.
    if (list.tail !== null) {
      list.tail.next = newNode;
      newNode.prev = list.tail;
    }
    list.tail = newNode;
    // set current tail to point to this new node
    // set list.tail to point to this new node

  };


  list.removeHead = function(){
    // if head exists, list.head should be next node (else null)

    if (list.head !== null) {
      // save the value of the list.head (so you can return it later)
      var headNode = list.head;
      // delete the list head
      delete list.head;
      list.head = headNode.next;

      if (list.head !== null) {
        list.head.prev = null;
      }

      return headNode.value;
    }
  };

  list.addToHead = function (value) {
    var newNode = makeNode(value);
    if (list.tail === null) {
      list.tail = newNode;
    }
    if (list.head !== null) {
      list.head.prev = newNode;
      newNode.next = list.head;
    }
    list.head = newNode;

  };

  list.removeTail = function (value) {
    if (list.tail !== null) {
      // save the value of the list.head (so you can return it later)
      var headNode = list.tail;
      // delete the list head
      delete list.tail;
      list.tail = headNode.next;

      if (list.tail !== null) {
        list.tail.prev = null;
      }

      return headNode.value;
    }
  }

  list.contains = function(target){
    // loop through entire list starting at the head
    var nodeLoop = function(node) {
      if (node.value === target) {
        return true;
      } else if (!node.next) {
        return false;
      } else {
        return nodeLoop(node.next);
      }
    };

    return nodeLoop(list.head);

    // if node.value is equal to the target,
      // return true
    // else if node.next != null,
      // move on to next node
    // else return false
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
