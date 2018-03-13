var sizeOf = require('image-size');

const testFolder = '.';
const fs = require('fs');
const path = require('path');
const process = require('process');
const camelcase = require('camelcase');
const capitalize = require('capitalize');
require("copy-paste").global();


// console.log(process.argv);

if(process.argv.length >= 3){
	var command = process.argv[2];
	if(command === 'loader'){
		loader();
	}
	else if(command === 'loaderi'){
		loader(true);
	}
}
else{
	//dim();
}

function loader(isInit){
	var regexp = new RegExp(/.(png|jpg|jpeg)/);
	
	var outp = [];
	
	fs.readdirSync(testFolder).forEach(file => {
	  if(regexp.test(file)){
		var splitted = file.split('.');
		
		var transformedName = camelcase(splitted[0]); 
		transformedName	= capitalize(transformedName);
		
		var str = '';
		if(isInit){
			str = `this.i_getLoader(this.i_getFreeSpins${transformedName}ImgURL());\n`
		}
		else{
			str = `_public.i_getFreeSpins${transformedName}ImgURL = function () \n` +
			`{\n` +
			`	return this.i_getFreeSpinsCustomImgResourcesPathURL() + "${file}";\n` + 
			`}\n`;
		}
		
		outp.push(str);
	  }
	})
	
	var joined = outp.join('');
	console.log(joined);
	copy(joined);
	console.log('********************');
	console.log('*copied to clipboard');
}


function dim(){
	var regexp = new RegExp(/.(png|jpg|jpeg)/);

	fs.readdirSync(testFolder).forEach(file => {
	  if(regexp.test(file)){
		console.log('--------------------------------------------');
		console.log(file);
		var dimensions = sizeOf(path.join(testFolder, file));
		console.log(`<area x="${-dimensions.width/2}" y="${-dimensions.height/2}" w="${dimensions.width}" h="${dimensions.height}">`);
	  }
	})
}






