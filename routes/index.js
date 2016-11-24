
/*
 * GET home page.
 * simple: http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/
 */

module.exports.controller = function(app) {

	/**
	* a home page route
	*/
	app.get('/', function(req, res) {
		// any logic goes here
		res.render('index', {title: 'DPR'});
	});

}