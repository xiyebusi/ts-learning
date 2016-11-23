//typescript常用类型
var var1: boolean = false;
var orderNumber: number = 10;
// var name:string = "mark";
var list: number[] = [1, 2, 3];
var list2: Array<number> = [4, 5, 6];

enum Color { "Red", "Green", "Blue" };
var c1 = Color.Blue;
enum Color2 { Red = 1, Green = 2 };
var c2 = Color2.Green;
// console.log(c2);

var notSore: any = 4;

var ColorList: string[] = ["Red", "Greed", "Yellow"];
var testList = function () {

}

//常见简单接口用法
interface Userinfo{
    name:string;
    age:number;
}
var getUserInfo =function(user:Userinfo):string{
    return user.name + "==" + user.age;
}

//接口属性不确定
interface IsquareConfig{
    color?:string;
    width?:number;
}

var createSquare = function(square:IsquareConfig):{color:string,area:number}{
    var newSquare = {color:"red",area:100};
    if(square.color){
        newSquare.color = square.color;
    }
    if(square.width){
        newSquare.area = newSquare.area * square.width;
    }
    return newSquare;
}

var square1 = createSquare({color:"yellow",width:20});
// console.log(square1.area);

//利用接口重做js的search方法
interface searchFunt{
    (source:string,
    substring:string):boolean
}
var mySearch:searchFunt;
mySearch = function(source:string,substring:string){
    var result:number = source.search(substring);
    if(result == -1){
        return false;
    }else{
        return true;
    }
}


var str1 = "this is ok";
var substring1 = "ok";
var substring2 = "not";
// console.log(mySearch(str1,substring1));
// console.log(mySearch(str1,substring2));

//接口定义array,没看懂这是要干嘛。就跟直接写效果
//var myArray = ["Bob","Fred",123];
interface StringArray{
    [index:number]:string;
}

var myArray:StringArray;
myArray = ["Bob","Fred",123];

var list = ["a","b","c"];
myArray.forEach(element => {
    // console.log(element);
});

//class实现Interface,这个例子不理解
interface IClock{
    currentTime:Date;
    setDate(d:Date);
    //预计是新的构造方法
    new (h:number,m,number);
}

class Clock implements IClock{
    currentTime:Date;
    constructor(h:number,m:number){
        this.currentTime = h + '${h}:${m}';
    }
    getDate = function(){
        return this.currentTime;
    }
}

var cs:IClock = Clock;
var newClock = new cs(7,30);
console.log(newClock.getDate());

declare function jquery(...args:any[]):any;
import * as $ from 'jquery';
$.alert()