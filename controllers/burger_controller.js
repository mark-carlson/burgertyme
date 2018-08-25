var express = require("express");
var burger = require("../models/burger.js");

var app = express();

app.get("/", function (req, res) {
    res.redirect("/burgers");
});

app.get("/burgers", function (req, res) {
    burger.all( function(burgerData) {
        res.render("index", {burger_data: burgerData})
    })
});

module.exports = app;