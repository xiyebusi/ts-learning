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
console.log(square1.area);
//# sourceMappingURL=chapter_interface.js.map