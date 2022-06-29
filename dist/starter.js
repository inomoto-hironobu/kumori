"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var React = require("./react");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.render = function () {
        return (React.createElement("button", null, this.props.value));
    };
    return Square;
}(React.Component));
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Board.prototype.rennderSquare = function (i) {
        return React.createElement(Square, { value: i });
    };
    Board.prototype.render = function () {
        var status = "";
        //ルート要素の子要素
        var divChildren = [];
        divChildren.push(React.createElement("div", { className: "status" }, status));
        //table要素のtr要素を持ってくる
        var trList = this.props.target.querySelectorAll("tr");
        for (var i = 0; i < trList.length; i++) {
            //
            var data = trList.item(i).querySelectorAll("td,th");
            var dataArray = [];
            for (var j = 0; j < data.length; j++) {
                dataArray.push(this.rennderSquare(0));
            }
            divChildren.push(React.createElement("div", { className: "board-row" }, dataArray));
        }
        return React.createElement("div", {}, divChildren);
    };
    return Board;
}(React.Component));
exports.Board = Board;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game.prototype.render = function () {
        return (React.createElement("div", { className: "game" },
            React.createElement("div", { className: "game-board" },
                React.createElement(Board, { target: this.props.target })),
            React.createElement("div", { className: "game-info" },
                React.createElement("div", null),
                React.createElement("ol", null))));
    };
    return Game;
}(React.Component));
exports.default = Game;
