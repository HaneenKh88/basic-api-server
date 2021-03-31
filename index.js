'use strict';

require('dotenv').config();
const server = require('./src/server.js');
server.server.listen(process.env.PORT || 8080);

