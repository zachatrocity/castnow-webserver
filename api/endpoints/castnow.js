var router = require('express').Router();
var exec = require('child_process').exec;

router.post('/castnow', function (req, res, next) {
	var url = req.body.url;
	var flags = req.body.flags;
	console.log('castnow ' + url + flags);
	exec('castnow ' + url + flags, function(error, stdout, stderr) {
	   res.send(stdout);
	});
})

module.exports = router