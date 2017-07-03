/**
 * Created by MAC on 2017/7/3.
 */


/**
 * 当一个对象实现了Symbol.iterator属性时，我们认为它是可迭代的。
 * 一些内置的类型如Array，Map，Set，String，Int32Array，Uint32Array等都已经实现了各自的Symbol.iterator。
 * 对象上的Symbol.iterator函数负责返回供迭代的值。
 * */

let someArray = [1, "string", false];

//for..of会遍历可迭代的对象，调用对象上的Symbol.iterator方法
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}




let list11 = [4, 5, 6];

//for..in迭代的是对象的 键 的列表  在这里是数组下标
for (let i in list11) {
    console.log(i); // "0", "1", "2",
}

//for..of则迭代对象的键对应的值。
for (let i of list11) {
    console.log(i); // "4", "5", "6"
}







let pets = ["Cat", "Dog", "Hamster"];
pets["species"] = "mammals";

//查看对象属性的一种方法
for (let pet in pets) {
    console.log(pet); // "species"
}

//for..of关注于迭代对象的值
for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}