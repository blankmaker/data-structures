var makeBinarySearchTree = function(value){
  // make a binTree object
  var binTree = {};

  // create binTree.left and right, set to null by default
  binTree.left = null;
  binTree.right = null;

  // create binTree.value = value
  binTree.value = value;

  // extend bintreemethods object to here
  _.extend(binTree, binTreeMethods);

  // return binTree
  return binTree;
};

// make a binTreeMethods object
var binTreeMethods = {};

// create insert method
binTreeMethods.insert = function(value) {
  var newBinTree = makeBinarySearchTree(value);

  if (value < this.value) {
    if (this.left === null) {
      this.left = newBinTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = newBinTree;
    } else {
      this.right.insert(value);
    }
  }
};

// create contains
binTreeMethods.contains = function(target) {

};

// create depthFirstLog
binTreeMethods.depthFirstLog = function(callback) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
