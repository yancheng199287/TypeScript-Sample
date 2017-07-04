/**
 * Created by MAC on 2017/6/29.
 */
// 本案例演示了泛型
function identity(arg) {
    return arg;
}
//指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()
var output1 = identity("I am genericity function");
//利用了类型推论  -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
var output2 = identity("myString");
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function testMethod(arg) {
    return arg;
}
var myIdentity = testMethod;
console.log(myIdentity(655));
function testMethod01(arg) {
    return arg;
}
var myTestMethod01 = testMethod01;
//================泛型类======================
//除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "520";
stringNumeric.add = function (x, y) { return x + y; };
var result = (stringNumeric.add(stringNumeric.zeroValue, "test"));
console.log("result: " + result);
function logIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
//logIdentity(3);  // Error, number doesn't have a .length property
logIdentity({ length: 10, value: 3 });
