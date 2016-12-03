/**
 * @file wg-collections - LinkedHashMap collection
 *
 * Linked Hash Map structure
 * This structrue provides semantics similar to the Java LinkedHashMap and maintains a HashMap with insertion iteration order
 *
 */
// (C) Alexandre Morin 2015 - 2016

/**
 * Create a LinkeHashmap (Hashmap with insertion order)
 */
function LinkedHashMap() {
  this.clear();
}

/**
 * Get item by key
 * @param key - is the key for which to retreive the value
 * @return the corresponding key's value
 */
LinkedHashMap.prototype.get = function(key) {
  var item = this.map[key] || {};
  return item.value;
};

/**
 * Return the number of element in the map
 * @return {integer} the number of elements currently in the map
 */
LinkedHashMap.prototype.length = function() {
  return this.len;
};

/** 
 * Clear the map (remove all elements)
 */
LinkedHashMap.prototype.clear = function() {
  this.map = {};
  this.first = undefined;
  this.last = undefined;
  this.len = 0;
};

/**
 * Add an item to the map
 * @param key - is the key of the item
 * @param value - is the value of the item
 */
LinkedHashMap.prototype.add = function(key, value) {
  this.remove(key);
  var item = {
    key: key,
    value: value,
    prev: this.last,
    next: undefined
  };
  if (this.last) {
    this.last.next = item;
  }
  if (!this.first) {
    this.first = item;
  }
  this.last = item;
  this.map[key] = item;
  this.len += 1;
};

/**
 * Remove item by key. It the item is not present in the map, then nothing happens
 * @param key - is the key of the item to remove
 */
LinkedHashMap.prototype.remove = function(key) {
  var item = this.map[key];
  if (!item) return;
  if (this.first === item) {
    this.first = item.next;
  }
  if (this.last === item) {
    this.last = item.prev;
  }
  if (item.prev) {
    item.prev.next = item.next;
  }
  if (item.next) {
    item.next.prev = item.prev;
  }
  delete this.map[item.key];
  this.len -= 1;
};

/**
 * Iterates over elements of the map in insertion order and call the 'fn' function for each item, passing it:
 * <ul>
 * <li>the "that" parameter value as the "this" context
 * <li>the item key and item value as parameters
 * <li>expecting "false" return code to abort iteration. Every other return code will be ignored
 * 
 * @param {function} fn - The function to call for each item in the map
 * @param that - The 'this' value to call the function on
 */
LinkedHashMap.prototype.each = function(fn, that) {
  var item = this.first;
  while (item !== undefined) {
    var res = fn.call(that, item.key, item.value);
    if (res == false) break;
    item = item.next;
  }
};

/**
 * Get the first key in the map
 * @return the first key
 */
LinkedHashMap.prototype.firstKey = function() {
  if (!this.first) return;
  return this.first.key;
}

/**
 * Get the last key in the map
 * @return the last key
 */
LinkedHashMap.prototype.lastKey = function() {
  if (!this.last) return;
  return this.last.key;
}


/**
 * Public module interface
 */
if (typeof(module) !== "undefined") {
  module.exports = LinkedHashMap;
}
