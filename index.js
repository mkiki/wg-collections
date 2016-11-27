/**
 * wg-collections - NPM package entry point
 */
// (C) Alexandre Morin 2015 - 2016

const LinkedHashMap = require('./src/linkedHashMap.js');

/**
 * Public interface
 */
module.exports = {
  LinkedHashMap: LinkedHashMap,
};
