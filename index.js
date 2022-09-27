<<<<<<< Updated upstream
var app = require('./server/newServer');
=======
var app = require('./server/srvr');
var config = require('./server/config/config');
>>>>>>> Stashed changes

var config = require('./server/config/myConfig');

app.listen(config.port);
