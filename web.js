var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
var port = Number(process.env.PORT || 5000);

app.use(serveStatic('dist'));
app.listen(port, function () {
	console.log('listenning to port 3000');
	
});
