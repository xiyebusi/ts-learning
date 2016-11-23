"use strict";
//typescript常用类型
var var1 = false;
var orderNumber = 10;
// var name:string = "mark";
var list = [1, 2, 3];
var list2 = [4, 5, 6];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c1 = Color.Blue;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
// console.log(c2);
var notSore = 4;
var ColorList = ["Red", "Greed", "Yellow"];
var testList = function () {
};
var getUserInfo = function (user) {
    return user.name + "==" + user.age;
};
var createSquare = function (square) {
    var newSquare = { color: "red", area: 100 };
    if (square.color) {
        newSquare.color = square.color;
    }
    if (square.width) {
        newSquare.area = newSquare.area * square.width;
    }
    return newSquare;
};
var square1 = createSquare({ color: "yellow", width: 20 });
var mySearch;
mySearch = function (source, substring) {
    var result = source.search(substring);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var str1 = "this is ok";
var substring1 = "ok";
var substring2 = "not";
var myArray;
myArray = ["Bob", "Fred", 123];
var list = ["a", "b", "c"];
myArray.forEach(function (element) {
    // console.log(element);
});
var Clock = (function () {
    function Clock(h, m) {
        this.getDate = function () {
            return this.currentTime;
        };
        this.currentTime = h + '${h}:${m}';
    }
    return Clock;
}());
var cs = Clock;
var newClock = new cs(7, 30);
console.log(newClock.getDate());
var $ = require('jquery');
$.alert();
//# sourceMappingURL=main.js.map