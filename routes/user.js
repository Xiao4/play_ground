
/*
 * GET users listing.
 */

module.exports.controller = function(app) {

	/**
	* a home page route
	*/
	app.get('/user', function(req, res) {
		// any logic goes here
		res.send('users');
	});

}