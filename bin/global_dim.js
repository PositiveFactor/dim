#!/usr/bin/env node
var lib = require('../index.js');
var files = lib.files();

files.forEach(file => {
  let {filename, width, height} = file; 
});

console.table(
files
);