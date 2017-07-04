/**
 * Created by Administrator on 2017/6/26.
 */
//本案例演示了 TypeScript 变量声明
function f() {
    var message = "Hello,world!";
    return message;
}
function f1() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f1();
console.log(g());
