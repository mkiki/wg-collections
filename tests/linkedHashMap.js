/**
 * wg-collections - LinkedHashMap unit tests
 */
// (C) Alexandre Morin 2015 - 2016

const assert = require('assert');
const LinkedHashMap = require('../lib/LinkedHashMap.js');

describe('LinkedHashMap', function() {

  function checkOrder(map, expected) {
    found = "";
    map.each(function(k, v) { found = found + k });
    assert (found === expected);
  }

  it('Should add and read elements', function(done) {
    var map = new LinkedHashMap();
    map.add("a", 1);
    map.add("b", 2);
    map.add("c", 3);
    assert (map.get("a") === 1);
    assert (map.get("b") === 2);
    assert (map.get("c") === 3);
    assert (map.get("d") === undefined);
    return done();
  });

  it('Should behave as a map', function(done) {
    var map = new LinkedHashMap();
    map.add("a", 1);
    map.add("b", 2);
    map.add("c", 3);
    map.add("b", 4);
    assert (map.get("a") === 1);
    assert (map.get("b") === 4);
    assert (map.get("c") === 3);
    return done();
  });

  it('Should preserve length', function(done) {
    var map = new LinkedHashMap();
    map.add("a", 1);
    map.add("b", 2);
    map.add("c", 3);
    map.add("b", 4);
    assert (map.length() === 3);
    return done();
  });

  it('Should get first', function(done) {
    var map = new LinkedHashMap();
    map.add("a", 1);
    map.add("b", 2);
    map.add("c", 3);
    map.add("b", 4);
    assert (map.firstKey() === "a");
    return done();
  });

  it('Should get last', function(done) {
    var map = new LinkedHashMap();
    map.add("a", 1);
    map.add("b", 2);
    map.add("c", 3);
    assert (map.lastKey() === "c");
    map.add("b", 4);
    assert (map.lastKey() === "b");
    return done();
  });

  it('Should conserve order', function(done) {

    var map = new LinkedHashMap();
    map.add("a", 1); checkOrder(map, "a");
    map.add("b", 2); checkOrder(map, "ab");
    map.add("c", 3); checkOrder(map, "abc");
    map.remove("b"); checkOrder(map, "ac");
    map.add("b", 4); checkOrder(map, "acb");
    return done();
  });

  it('Should remove head', function(done) {
    var map = new LinkedHashMap();
    map.add("a", 1);
    map.add("b", 2);
    map.add("c", 3);
    map.remove("a");
    assert (map.get("a") === undefined);
    assert (map.length() === 2);
    checkOrder(map, "bc");
    return done();
  });  

  it('Should remove tail', function(done) {
    var map = new LinkedHashMap();
    map.add("a", 1);
    map.add("b", 2);
    map.add("c", 3);
    map.remove("c");
    assert (map.get("c") === undefined);
    assert (map.length() === 2);
    checkOrder(map, "ab");
    return done();
  });  
  
});


