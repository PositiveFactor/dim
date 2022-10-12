#!/usr/bin/env node
const lib = require('../index.js');

let files = lib.files();
files.forEach(file => {
	let {filename, width, height} = file; 
	file.centerWidth = width/2; 
	file.centerHeight = height/2; 
});

console.table(files);

