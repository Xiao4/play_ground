
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
	app.post("/test/upload", function(req, res){
		console.log(req.files);
		res.end('ok')
	});
	app.get("/test/appup", function(req, res) {
		res.render('test/appup', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/sdk", function(req, res) {
		res.render('test/sdk', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});
	app.get("/test/landing", function(req, res) {
		res.render('test/landing', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			res.end(chunk);
		});
	});

	var __sdk_r_count=0;
	app.get("/test/sdk_r", function(req, res) {
		var tmp = {
			"html": '<div class="gg-normal-box"><div class="box-title">新大主宰玩到抽筋，来来来制作商赏你一毛钱！</div><div class="box-image"><img class="un-prev" src="http://sm.domobcdn.com/ugc/e/23864d84fe00d657c29ca4d3.jpg"></div><div class="box-info"><span class="author-name">多盟</span><span class="logo-1">广告</span></div><div class="close-btn"></div></div>',
			"imp": 'http://imp_fake',
			"clk": 'http://clk_fake'
		}, htmls= [
			"<div class=\"gg-normal-box\"><div class=\"box-title\">出行街拍没有感觉？一辆摩拜全搞定</div><div class=\"box-image\"><img class=\"un-prev\" src=\"http://sm.domobcdn.com/ugc/1464379.jpg\"></div><div class=\"box-info\"><span class=\"author-name\">多盟</span><span class=\"logo-1\">广告</span></div><div class=\"close-btn\"></div></div>",
			"<div class=\"gg-normal-box\"><div class=\"box-title\">摩拜新创预约功能，上下班找车又快又方便</div><div class=\"box-image\"><img class=\"un-prev\" src=\"http://sm.domobcdn.com/ugc/1464387.jpg\"></div><div class=\"box-info\"><span class=\"author-name\">多盟</span><span class=\"logo-1\">广告</span></div><div class=\"close-btn\"></div></div>",
			"<div class=\"gg-normal-box\"><div class=\"box-title\">超可爱的摩拜，好身材骑出来</div><div class=\"box-image\"><img class=\"un-prev\" src=\"http://sm.domobcdn.com/ugc/1466091.jpg\"></div><div class=\"box-info\"><span class=\"author-name\">多盟</span><span class=\"logo-1\">广告</span></div><div class=\"close-btn\"></div></div>",
			"<div class=\"gg-normal-box\"><div class=\"box-title\">年轻人的第一辆共享单车，青春派骑摩拜！</div><div class=\"box-image\"><img class=\"un-prev\" src=\"http://sm.domobcdn.com/ugc/1466092.jpg\"></div><div class=\"box-info\"><span class=\"author-name\">多盟</span><span class=\"logo-1\">广告</span></div><div class=\"close-btn\"></div></div>"
		];
		if(!req.query.uid)tmp.uid="fakelalala.00";
		__sdk_r_count++;
		tmp.html = htmls[__sdk_r_count%htmls.length];

		res.jsonp(tmp);
	});
	app.get("/test/dvx", function(req, res) {
		res.render('test/dvx', {}, function(err, chunk){
			if(err)console.error(err);
			// res.status(404).end();
			var addata = {
					"runtime": {
						"sv": 30400
					},
					"ad": {
						"logo": '//sm.domobcdn.com/ugc/1302928.png',
						"name": "阿瓦隆之王",
						"desc": "testdesc2 for c1",
						"clk_url": "domob:\/\/store\/?file_url=https%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2F/wa-long-zhi-wang-king-avalon%2Fid1084930849%3Fmt%3D8",
						"pts": 1,
						"unit": "",
						"r_level": 50,
						"r_cnt": "29,670",
						"screenshots": [
							{"url": '//sm.domobcdn.com/ugc/1302934.png', "color": '#235e32'},
							{"url": '//sm.domobcdn.com/ugc/1302935.png', "color": '#b74230'},
							{"url": '//sm.domobcdn.com/ugc/1302936.png', "color": '#85962f'},
							{"url": '//sm.domobcdn.com/ugc/1302937.png', "color": '#c8ac67'},
							{"url": '//sm.domobcdn.com/ugc/1302938.png', "color": '#b69465'}
						],
						"tags": [],
						"poster": "\/\/aow.domobcdn.com\/ugc\/91987.png",
						"pageurl": ""
					}
				};
			var addata2 = {
				"runtime": {
					"sv": 30502
				},
				"ad": {
					"logo": "http:\/\/domob-203.domob-inc.cn:1980\/ugc\/1030406.png",
					"name": "一二三四五六七八九十",
					"desc": "\u5927\u5bb6\u597d\uff1b\u5927\u5bb6\u597d\u5927\u5bb6\u597d\uff1b\u5927\u5bb6\u597d\u5927\u5bb6\u597d\uff1b\u5927\u5bb6\u597d",
					"clk_url": "domob:\/\/store\/?file_url=https%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fbu-ding-jiu-dian-jing-ji-xing%2Fid973816207%3Fmt%3D8&itid=973816207",
					"pts": 1,
					"unit": "",
					"r_level": 0,
					"r_cnt": "0",
					"screenshots": [{
						"url": "http:\/\/domob-203.domob-inc.cn:1980\/ugc\/1069058.png",
						"color": "#6d27d"
					}, {
						"url": "http:\/\/domob-203.domob-inc.cn:1980\/ugc\/1069059.png",
						"color": "#7184b"
					}, {
						"url": "http:\/\/domob-203.domob-inc.cn:1980\/ugc\/1069060.png",
						"color": "#fac65c"
					}, {
						"url": "http:\/\/domob-203.domob-inc.cn:1980\/ugc\/1069061.png",
						"color": "#d7eff9"
					}],
					"tags": ["\u5927\u5bb6\u597d\uff1b\u5927\u5bb6\u597d"],
					"poster": "",
					"pageurl": ""
				}
			};
			res.end(chunk.replace('<LANDING_DATA>', JSON.stringify(addata2)));
		});
	});

}
