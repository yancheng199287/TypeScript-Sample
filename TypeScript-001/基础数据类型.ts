/**
 * Created by Administrator on 2017/6/26.
 */


//本案例演示了 TypeScript 基础数据类型


//=========数字======================================
//布尔值
let isDone: boolean = false;

//十进制数字
let decLiteral: number = 6;

//十六进制
let hexLiteral: number=0xf00d;

//二进制
let binaryLiteral:number=0b1010;

//八进制
let octalLiteral:number=0o744;


//=========字符串======================================
let username: string = `Gene`;
let age: number = 37;
//字符串模版
let sentence: string = `字符串模版 Hello, my name is ${ username }, I'll be ${ age + 1 } years old next month.`;
//等同于拼接
let sentence1: string = "Hello, my name is " + username + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";

console.log(sentence)


//=========数组=========================================
//在元素类型后面接上 []声明数组
let list: number[]=[1,2,3];

//使用数组泛型，Array<元素类型>：
let list1:Array<number>=[1,2,3];

console.log(`print list1==> ${ list1 }`)


//=========元组Tuple========================================

//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 比如，你可以定义一对值分别为 string和number类型的元组。

let x:[string,number];
x=['Yancheng',22];
console.log(`print tuple x ==> ${ x }`)
console.log(`访问一个已知的元素，自动识别该类型,并可以调用该变量所持有的方法 ${x[0].length}`);


//=========枚举========================================

enum Color {Red,Green,Blue}

let c:Color=Color.Green

console.log(`获取枚举元素索引编号：${c}  根据索引编号获取枚举名：${Color[c]}`);


//=========Any类型========================================

let notSure:any=4;
notSure="maybe a string instead";
notSure=false; // okay, definitely a boolean

console.log(`打印最终any类型的变量值：${notSure}`)

//可以包含不同类型的数据
let listAny: any[] = [1, true, "free"];
listAny[1] = 100


//=========Void类型========================================
//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void：

function warnUser(): void {
    alert("This is my warning message");
}

//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;


//=========Never类型========================================
//never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
//never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never


//=========类似断言========================================
//相当于类型转换
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

//推荐使用
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;