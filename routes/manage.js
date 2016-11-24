/*
*	management
*/

module.exports.controller = function(app) {

	/**
	* a home page route
	*/
	app.get('/manage', function(req, res) {
		if(req.user)req.logout();
		res.setHeader('Access-Control-Allow-Origin','*');
		// any logic goes here
		res.render('manage/login', {title: 'DPR内容管理'});
	});
	app.get('/manage/logout', function(req, res){
		req.logout();
		res.redirect('/manage');
	});

	app.get('/manage/dashboard', function(req, res) {
		// any logic goes here
		res.render('manage/dashboard', {title: 'DPR', view: 'dashboard'});
	});
}