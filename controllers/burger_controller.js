var express = require("express");
var burger = require("../models/burger.js");

var app = express();

app.get("/", function (req, res) {
    res.redirect("/burgers");
});

app.get("/burgers", function (req, res) {
    burger.all(function (burgerData) {
        res.render("index", {
            burger_data: burgerData
        })
    })
});

app.post("/addburger", function (req, res) {
    burger.create(req.body.burgername, function (result) {
        console.log("req.body.burgername", req.body.burgername);
        res.json(result)
    })
})

app.put("/devourburger/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        res.json(result)
    })
})

module.exports = app;