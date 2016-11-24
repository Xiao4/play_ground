
/*
 * GET home page.
 * simple: http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/
 */

module.exports.controller = function(app) {
	/**
	* domob_web sdk
	*/
	app.set("jsonp callback name", "_");
	app.get("/test/dw", function(req, res) {
		// res.writeHeader(302, {
		// 	'location': '/test/ad',
		// 	'Access-Control-Allow-Origin': '*'
		// });
		// res.jsonp({"error": {"code": 4000, "message": "no ad", "url": "http://xiao.si"}});
		// res.render('test/ad', {}, function(err, chunk){
		// 	if(err)console.error(err);
		// 	res.jsonp({"html": chunk});
		// });
		res.render('test/ad', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/v", function(req, res) {
		res.render('test/video', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/map", function(req, res) {
		res.render('test/map', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/vb", function(req, res) {
		res.render('test/v_banner', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/vl", function(req, res) {
		res.render('test/v_landing', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/fp", function(req, res) {
		res.render('test/fingerprint', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/weather", function(req, res) {
		res.render('test/weather', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/sw", function(req, res) {
		res.render('test/sw', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/upload", function(req, res) {
		res.render('test/upload', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/appup", function(req, res) {
		res.render('test/appup', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});

}
