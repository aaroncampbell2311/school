var express = require('express');
var redis = require('redis');
var redisClient = redis.createClient();
var router = express.Router();

router.get('/', fucntion(req, res) {
	redisClient.smembers('school', function(err,school) {
		res.locals.school = school ? school : [];
		res.render('school');
	});
});
router.post('/', function() {
	redisClient.sadd('school', req.body.name);
	res.redirect('/school');
});
router.get('/delete/:name', function() {
	redisClient.srem('school', req.params.name);
	res.redirect('/school');
});
module.exports= router;