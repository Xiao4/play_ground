/*
	Asset.js
*/
var componentList = require('../config/components.json'),
	fs = require('fs'),
	path = require('path'),
	crypto = require('crypto'),
	config = require('../config/config.json');

var REG_EXT = /\.(\w+)([\?\#].*)?$/;

function __md5Hash(str) {
	var hash = crypto.createHash('md5');
	return hash.update(str).digest('hex');
}
function __syncStreams(req, res, files, next){
	if(!files.length){
		if(typeof next == "function"){
			return next(req, res, files);
		}else{
			return res.end();
		}
	}
	var file;

	do{
		file = files.shift();
		if(file != '')break;
	}while(files.length);

	file = file.replace(/\.{2,}\//g, '');
	if(!file){
		return __syncStreams(req, res, files, next);
	}
	file = path.normalize(path.join(__dirname, '../', config.DPR_FILES_PATH, file));
	if(!fs.existsSync(file)){
		return __syncStreams(req, res, files, next);
	}

	fs.createReadStream(file).on('data', function(chunk){
		res.write(chunk);
	}).on('end', function(){
		__syncStreams(req, res, files, next)
	});
}
function __clone(obj) {
   return JSON.parse(JSON.stringify(obj));
}
function Asset () {
	
}
// , fileStr, version are for 304 handling
Asset.prototype.flush = function(req, res, files, next) {
	var tmpExt = REG_EXT.exec(files[0]),
	// eTag = __md5Hash(fileStr),
		contentType;
	tmpExt = tmpExt ? tmpExt[1] : '';
	contentType = config.MIME[tmpExt];

	if(!contentType)return res.send("403: Forbidden", 403);

	res.setHeader('Content-Type', contentType);

	// //handle 304
	// res.setHeader('eTag', eTag);
	// if(req.headers['if-none-match'] && eTag == req.headers['if-none-match']){
	// 	res.send('', 304);
	// 	return;
	// }

	__syncStreams(req, res, files, next);
};
Asset.prototype.getVersion = function(files) {
	return '2014081301';
};
Asset.prototype.getComboUrl = function(files) {
	var baseURL = config.SERVER_URL || '/';
	return (files&&files.length)?baseURL + path.normalize("/asset/combo?"+this.getVersion()+','+files.join(',')) : '';
};
Asset.prototype.getComponent = function(componentName) {
	if(typeof componentList[componentName] != "undefined"){
		return __clone(componentList[componentName]);
	}else{
		return null;
	}
};
Asset.prototype.getComponentList = function() {
	return __clone(componentList);
};

module.exports = new Asset();