"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("./react");
var ReactDOM = require("./react-dom");
var starter_1 = require("./starter");
var rscelement = document.getElementById("react-starter-code");
if (rscelement) {
    var app = React.createElement(starter_1.default, { target: rscelement.querySelector("table") }, null);
    ReactDOM.render(app, rscelement);
}
