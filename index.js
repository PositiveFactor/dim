var sizeOf = require('image-size');

const testFolder = '.';
const fs = require('fs');
const path = require('path');

var regexp = new RegExp(/.(png|jpg|jpeg)/);

fs.readdirSync(testFolder).forEach(file => {
  if(regexp.test(file)){
	console.log('--------------------------------------------');
	console.log(file);
	var dimensions = sizeOf(path.join(testFolder, file));
	console.log(`<area x="${-dimensions.width/2}" y="${-dimensions.height/2}" w="${dimensions.width}" h="${dimensions.height}">`);
  }
  
})



