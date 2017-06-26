/**
 * Created by Administrator on 2017/6/26.
 */
//本案例演示了 TypeScript 基础数据类型
//=========数字======================================
//布尔值
var isDone = false;
//十进制数字
var decLiteral = 6;
//十六进制
var hexLiteral = 0xf00d;
//二进制
var binaryLiteral = 10;
//八进制
var octalLiteral = 484;
//=========字符串======================================
var username = "Gene";
var age = 37;
//字符串模版
var sentence = "\u5B57\u7B26\u4E32\u6A21\u7248 Hello, my name is " + username + ", I'll be " + (age + 1) + " years old next month.";
//等同于拼接
var sentence1 = "Hello, my name is " + username + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//=========数组=========================================
//在元素类型后面接上 []声明数组
var list = [1, 2, 3];
//使用数组泛型，Array<元素类型>：
var list1 = [1, 2, 3];
console.log("print list1==> " + list1);
//=========元组Tuple========================================
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 比如，你可以定义一对值分别为 string和number类型的元组。
var x;
x = ['Yancheng', 22];
console.log("print tuple x ==> " + x);
console.log("\u8BBF\u95EE\u4E00\u4E2A\u5DF2\u77E5\u7684\u5143\u7D20\uFF0C\u81EA\u52A8\u8BC6\u522B\u8BE5\u7C7B\u578B,\u5E76\u53EF\u4EE5\u8C03\u7528\u8BE5\u53D8\u91CF\u6240\u6301\u6709\u7684\u65B9\u6CD5 " + x[0].length);
//=========枚举========================================
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log("\u83B7\u53D6\u679A\u4E3E\u5143\u7D20\u7D22\u5F15\u7F16\u53F7\uFF1A" + c + "  \u6839\u636E\u7D22\u5F15\u7F16\u53F7\u83B7\u53D6\u679A\u4E3E\u540D\uFF1A" + Color[c]);
//=========Any类型========================================
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log("\u6253\u5370\u6700\u7EC8any\u7C7B\u578B\u7684\u53D8\u91CF\u503C\uFF1A" + notSure);
//可以包含不同类型的数据
var listAny = [1, true, "free"];
listAny[1] = 100;
//=========Void类型========================================
//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser() {
    alert("This is my warning message");
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
var unusable = undefined;
//=========Never类型========================================
//never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
//never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
//=========类似断言========================================
//相当于类型转换
var someValue = "this is a string";
var strLength = someValue.length;
//推荐使用
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
