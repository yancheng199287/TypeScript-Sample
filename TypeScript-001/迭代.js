/**
 * Created by MAC on 2017/7/3.
 */
/**
 * 当一个对象实现了Symbol.iterator属性时，我们认为它是可迭代的。
 * 一些内置的类型如Array，Map，Set，String，Int32Array，Uint32Array等都已经实现了各自的Symbol.iterator。
 * 对象上的Symbol.iterator函数负责返回供迭代的值。
 * */
var someArray = [1, "string", false];
//for..of会遍历可迭代的对象，调用对象上的Symbol.iterator方法
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
var list11 = [4, 5, 6];
//for..in迭代的是对象的 键 的列表  在这里是数组下标
for (var i in list11) {
    console.log(i); // "0", "1", "2",
}
//for..of则迭代对象的键对应的值。
for (var _a = 0, list11_1 = list11; _a < list11_1.length; _a++) {
    var i = list11_1[_a];
    console.log(i); // "4", "5", "6"
}
var pets = ["Cat", "Dog", "Hamster"];
pets["species"] = "mammals";
//查看对象属性的一种方法
for (var pet in pets) {
    console.log(pet); // "species"
}
//for..of关注于迭代对象的值
for (var _b = 0, pets_1 = pets; _b < pets_1.length; _b++) {
    var pet = pets_1[_b];
    console.log(pet); // "Cat", "Dog", "Hamster"
}
