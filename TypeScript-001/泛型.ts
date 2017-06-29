/**
 * Created by MAC on 2017/6/29.
 */

// 本案例演示了泛型

function identity<T>(arg: T): T {
    return arg;
}
//指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()
let output1 = identity<string>("I am genericity function")

//利用了类型推论  -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
let output2 = identity("myString");

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}


function testMethod<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = testMethod;

console.log(myIdentity(655))


//==============泛型参数========================
//除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间
interface  GenericIdentityFn<T> {

    <T>(arg: T): T;
}

function testMethod01<T>(arg: T): T {
    return arg;
}

let myTestMethod01: GenericIdentityFn<number>=testMethod01;


//================泛型类======================
//除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "520";
stringNumeric.add = function(x, y) { return x + y; };

let result=(stringNumeric.add(stringNumeric.zeroValue, "test"));
console.log(`result: ${result}`);


//===========泛型约束============================================
interface Lengthwise {
    length: number;
}

function logIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

//logIdentity(3);  // Error, number doesn't have a .length property

logIdentity({length:10,value:3});

