var Graph = function(){
  this._storage = {};
  this._firstNode;
};

var nodeMaker = function(value) {
  var node = {};

  node.value = value;
  node.edges = {};

  return node;
};

Graph.prototype.addNode = function(newNode, toNode){
  // if (newNode = "kittens") {
  //   debugger;
  // }
  var nodeToAdd = nodeMaker(newNode);

  if (this._firstNode === undefined) {
    this._firstNode = nodeToAdd;
  }
  // if this isn't the first node AND no 'toNode' is provided
  if (nodeToAdd !== this._firstNode && toNode === undefined) {
    // set 'toNode' to be the first node
    toNode = this._firstNode.value;
  }

  this._storage[newNode] = nodeToAdd;

  if (toNode !== undefined) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return !!(this._storage[node]);
};

Graph.prototype.removeNode = function(node){

  // loop through this._storage and
  for (var key in this._storage[node].edges) {
    this.removeEdge(node, key);
  }
  delete this._storage[node];
    // set temp variable to 'toNode'
    // call this._storage[node].removeEdge(node, temp )
  // delete node
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return !!(this._storage[fromNode].edges[toNode]);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._storage[fromNode].edges[toNode] = true;
  this._storage[toNode].edges[fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this._storage[fromNode]['edges'][toNode];
  delete this._storage[toNode]['edges'][fromNode];
  if (Object.keys(this._storage[fromNode]['edges']).length === 0) {
    delete this._storage[fromNode];
  }
  if (Object.keys(this._storage[toNode]['edges']).length === 0) {
    delete this._storage[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
