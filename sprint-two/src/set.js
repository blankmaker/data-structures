var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // In case this is a first add, create a new container for this._storage
  if (this._storage === undefined) {
    this._storage = {};
  }
  // set the new container's property equal to the item
  this._storage[item] = item;


};

setPrototype.contains = function(item){
  // if the item lookup in this._storage doesn't exist, return true

  if (this._storage[item] !== undefined) {
    return true;
  }
  // otherwise return false
  return false;
};

setPrototype.remove = function(item){
  // if the property called item exists in this._storage, delete it
  if (this._storage[item] === item) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


