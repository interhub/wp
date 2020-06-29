"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var port_1 = require("./port");
var App = express_1.default();
App.use(express_1.default.json());
App.use(express_1.default.urlencode({ extended: true }));
App.use(cors_1.default());
App.get('/', function (req, res) {
    res.send('hello server');
});
App.listen(port_1.default, function () {
    console.log('SERVER START ON PORT', port_1.default);
});
