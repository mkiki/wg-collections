# JavaScript collections and collection utilities

## LinkedHashMap
This structrue provides semantics similar to the Java LinkedHashMap and maintains a HashMap with insertion iteration order

Creating the map

    var map = new LinkedHashMap();

Adding elements

    map.add("key", value);

Retreiving elements

    map.get("key");
    
Map length

	map.length()
	
Removing elements

	map.remove("key")
	
	map.clear();

Iterating

	map.firstKey();
	map.lastKey();

	map.each(function(key, value) { ... });
