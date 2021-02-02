const sizeOf = require('image-size');
const fs = require('fs');
const path = require('path');

const testFolder = '.';

module.exports.files = function(){
  var regexp = new RegExp(/.(png|jpg|jpeg)/);
  var files = [];

	fs.readdirSync(testFolder).forEach(filename => {
	  if(regexp.test(filename)){
      var dimensions = sizeOf(path.join(testFolder, filename));
      files.push({
        "filename": filename, 
        "width": dimensions.width,
        "height": dimensions.height,
      });
	  }
	})
  
  return files;
}






