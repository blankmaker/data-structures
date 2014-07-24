var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeOfStack = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {

};

  stackMethods.push = function(value){
    this.storage[this.sizeOfStack] = value;
    this.sizeOfStack++;
  };

  stackMethods.pop = function(){
    if (this.sizeOfStack > 0) {
      this.sizeOfStack--;
      var result = this.storage[this.sizeOfStack];
      delete this.storage[this.sizeOfStack];
      return result;
    }
  };

  stackMethods.size = function(){
    return this.sizeOfStack;
  };

