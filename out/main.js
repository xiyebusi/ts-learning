// import http = require('http');
// var port = process.env.port || 1337;
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// }).listen(port);
// console.log("你好！");
// console.log(`Server Started! Please visit http://127.0.0.1:${port}`);
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
console.log(c2);
var notSore = 4;
//# sourceMappingURL=main.js.map