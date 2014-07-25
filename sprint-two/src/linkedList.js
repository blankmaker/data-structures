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
    if (list.tail != null) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
    // set current tail to point to this new node
    // set list.tail to point to this new node

  };

  list.removeHead = function(){
    // if head exists, list.head should be next node (else null)

    if (list.head !== null) {
      var headNode = list.head;
      delete list.head;
      list.head = headNode.next || null;
      return headNode.value;
    }



  };

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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
