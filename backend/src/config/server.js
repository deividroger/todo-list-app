const port = 3003;

const bodyparser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const server  = express();

server.use(bodyparser.urlencoded({extended: true}));

server.use(bodyparser.json());

server.use(allowCors);

server.listen(port,function(){

    console.log(`Backend is running on ${port} `);
});

module.exports = server;


