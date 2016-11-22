// import http = require('http');
// var port = process.env.port || 1337;
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// }).listen(port);
// console.log("你好！");
// console.log(`Server Started! Please visit http://127.0.0.1:${port}`);

/// <reference path="jquery/jquery.d.ts" />
var var1: boolean = false;
var orderNumber: number = 10;
// var name:string = "mark";
var list: number[] = [1, 2, 3];
var list2: Array<number> = [4, 5, 6];

enum Color { "Red", "Green", "Blue" };
var c1 = Color.Blue;

enum Color2 { Red = 1, Green = 2 };
var c2 = Color2.Green;
console.log(c2);

var notSore: any = 4;

var ColorList: string[] = ["Red", "Greed", "Yellow"];
var testList = function () {

}
import * as $ from "jquery";