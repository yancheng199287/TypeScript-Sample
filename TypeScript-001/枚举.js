/**
 * Created by MAC on 2017/7/3.
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 7] = "Left";
    Direction[Direction["Right"] = 4] = "Right"; // 可以 是一个表达式， 这里是位运算  在编译期间求值
})(Direction || (Direction = {}));
console.log("letf is : " + Direction.Left + ", right is :" + Direction.Right);
var d = Direction.Down;
//可以从枚举值到枚举名进行反向映射。
var nameOfDown = Direction[Direction.Down];
console.log("nameOfDown is : " + nameOfDown); // Print  Right
console.log("a is : " + 1 /* A */); // Print  Right
