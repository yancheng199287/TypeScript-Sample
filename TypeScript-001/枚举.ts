/**
 * Created by MAC on 2017/7/3.
 */

enum Direction{
    Up = 1,
    Down,   //当前枚举成员的值是上一个枚举成员的值+1
    Left = 2 + 5,  // 可以手动指定值
    Right = 1 << 2  // 可以 是一个表达式， 这里是位运算  在编译期间求值
}

console.log(`letf is : ${Direction.Left}, right is :${Direction.Right}`)


let d = Direction.Down;

//可以从枚举值到枚举名进行反向映射。
let nameOfDown = Direction[Direction.Down];

console.log(`nameOfDown is : ${nameOfDown}`) // Print  Right




//----------------------const 常数枚举-------------------
//仅仅是约束编程，类似于内联插值， 编译的时候会被删除！
const enum TestEnum {
    A = 1,
    B = A * 2
}

console.log(`a is : ${TestEnum.A}`) // Print  Right