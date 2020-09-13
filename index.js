var app = require('./server/server');
var config = require('./server/config/config');

app.listen(config.port);