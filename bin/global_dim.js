#!/usr/bin/env node
var lib = require('../index.js');
var files = lib.files();

files.forEach(file => {
  let {filename, width, height} = file; 
});

console.table(
files, 
{
  columns: {
    0: {
      alignment: 'left',
      width: 10
    },
    1: {
      alignment: 'center',
      width: 10
    },
    2: {
      alignment: 'right',
      width: 10
    }
  }
}
);