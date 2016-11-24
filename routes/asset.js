
/*
 * GET asset.
 */
var Asset = require('../module/Asset'),
	config = require('../config/config.json');

module.exports.controller = function(app) {

	/**
	* a asset page route
	*/
	app.get('/asset', function(req, res) {
		res.render('index', {title: 'DPR asset'});
	});

	app.get('/asset/combo', function(req, res) {
		var filesStr, version, files,
			match = /^[^\?]*\?(.*$)/g.exec(req.url);

		filesStr =  (match===null)?'': match[1];

		if(filesStr.length){
			files = filesStr.split(','); // to Array
			version =  files.shift();	//version is the frist element of this array


			// Asset.flush(req, res, files, filesStr, version); //req, filesStr, version are for 304 handling.
			Asset.flush(req, res, files);
		}else{
			res.render('index', {title: 'DPR combo'});
		}
	});

	app.get('/asset/component', function(req, res) {
		res.render('asset/component', {
			"title": 'DPR', 
			"components": Asset.getComponentList(), 
			"version": Asset.getVersion()
		});
	});
	app.get('/asset/component/:componentName', function(req, res) {
		var component = Asset.getComponent(req.params.componentName),
			match = /^[^\?]*\?(.*$)/g.exec(req.url),
			filesStr =  (match===null)?'': match[1],
			version;
		if(component === null){
			res.status(404);
			return res.end();
		}
		if(filesStr.length){
			version =  filesStr.split(',').shift();	//version is the frist element of this array
		}
		var next;
		if(component.css && component.css.length){
			next = function(req, res){
				res.render('asset/async', {
					"css": Asset.getComboUrl(component.css),
					"js": {},
					"asset_server": config.SERVER_URL,
					"callback": '',
					"version": version
				}, function(err, chunk){
					if(err)console.error(err);
					res.end(chunk);
				});
			}
		}
		Asset.flush(req, res, component.js, next);
	});
	app.get('/asset/async/:componentName/:version', function(req, res) {
		var component = Asset.getComponent(req.params.componentName),
			match = /^[^\?]*\?(.*$)/g.exec(req.url),
			filesStr =  (match===null)?'': match[1],
			version,
			callback = req.param('callback');

		if(component === null){
			res.status(404);
			return res.end();
		}
		if(filesStr.length){
			version =  filesStr.split(',').shift();	//version is the frist element of this array
		}
		res.setHeader('Content-Type', config.MIME['js']);
		res.render('asset/async', {
			"css": Asset.getComboUrl(component.css),
			"js": Asset.getComboUrl(component.js),
			"callback": '',
			"asset_server": config.SERVER_URL
		});
	});

}