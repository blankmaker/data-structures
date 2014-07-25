var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){ // 'cat', 'meow'
  var i = getIndexBelowMaxForKey(k, this._limit); // i = hashed key ('cat', 8)
  // if the index 'i' is undefined, create a new array at i
  if (this._storage.get(i) === undefined) {
    this._storage.set(i, v);
  }

  // this._storage[i].push('Seagal');

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if i is undefined, return false;
  if (this._storage[i] === undefined) {
    return false;
  }
  this._storage[i].each(function(value, key, collection) {
    if (value.k !== undefined) {
      return value.k;
    }
  });
  return false;
  // if i exists, loop through i bucket
  //
    // if k if found, return the value, else
    // return false

};

HashTable.prototype.remove = function(k){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
