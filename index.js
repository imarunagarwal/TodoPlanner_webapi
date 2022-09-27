var app = require('./server/newServer');

var config = require('./server/config/myConfig');

app.listen(config.port);
