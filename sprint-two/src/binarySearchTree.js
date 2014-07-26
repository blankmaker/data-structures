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
// start at top of tree and check if value = target
  if (this.value === target) {
    return true;
  } else if (target > this.value) {
      if (this.right !== null) {
        return this.right.contains(target);
      }
  } else  {
    if (this.left !== null) {
      return this.left.contains(target);
    }
  }
  return false;
};

// create depthFirstLog
binTreeMethods.depthFirstLog = function(callback) {
// return callback(this.value)
// also call on this.left and this.right (if they exist)
  this.value = callback.call(null, this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
