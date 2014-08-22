var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v){ // 'cat', 'meow'
  var i = getIndexBelowMaxForKey(k, this._limit); // i = hashed key ('cat', 8)
  // if the index 'i' is undefined, create a new array at i
  if (this._storage.get(i) === undefined) {
    this._storage.set(i, []);
  }

  this._storage.get(i).push([k,v]);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if i is undefined, return false;
  if (this._storage.get(i) === undefined) {
    return null;
  }
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
     if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
  return null;
  // if i exists, loop through i bucket
  //
    // if k if found, return the value, else
    // return false

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined) {
    return null;
  }
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
     if(bucket[j][0] === k) {
      bucket.splice(j,1);
    }
  }
  return null;



};
/*
 * Complexity: What is the time complexity of the above functions?
 */
