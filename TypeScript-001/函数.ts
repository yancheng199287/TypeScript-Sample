/**
 * Created by Administrator on 2017/6/29.
 */

// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function (x, y) {
    return x + y;
};


let myAdd1: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number {
        return x + y;
    };


let sum=myAdd1(50,12);
console.log(sum)

//类型推断，同上
let myAdd2: (baseValue:number, increment:number) => number =
    //如果参数列表已经指定类型，函数体的参数类型不用指定
    function(x, y) { return x + y; };

//===============可选参数和默认参数=================================
//在JavaScript里面传递参数是默认可选的，如果不传则是 undefined
//而在TypeScript里面函数默认是必须传递参数个数参数类型参数顺序必须一致
//而如果不想传递某个参数，使用参数名旁使用 ?实现可选参数
