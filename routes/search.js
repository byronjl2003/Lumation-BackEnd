/* import {
    express
} from 'express'; */
var express = require('express');
/* import {
    search
} from '../controllers/search'; */
var search = require('../controllers/search');
var app = express();


app.get('/', async(req, res, next) => {
    const resp = await search(req, res);

});

module.exports = app;