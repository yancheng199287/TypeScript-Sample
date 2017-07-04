/**
 * Created by Administrator on 2017/6/26.
 */


interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};


/**
 * 需要注意的是，我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。我们只会去关注值的外形。
 * 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
 *
 * printLabel方法参数里面指定传入一个LabelledValue接口对象， 我们在构建对象的时候只需要保证参数名字和类型一致即可
 *
 * */
printLabel(myObj);


//--------------可选参数

//带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};

    //如果有值的话
    if (config.color) {
        newSquare.color = config.color;
    }

    //如果有值的话
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

console.log(`可选参数取得的结果值 color：${ mySquare.color} ， area：${ mySquare.area} `)


//--------------只读属性

//一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:
interface Point {
    readonly x: number;
    readonly y: number;

}

let p1: Point = {x: 10, y: 20};
//p1.x = 5; // error,只读属性无法再次修改啦!


//它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let ro: ReadonlyArray<number> = a;


/*
 readonly vs const
 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
 */


//==============接口  函数类型==================================================

interface SearchFunc {
    (source: string, subString: string): boolean;
}

//接口函数变量声明，参数个数和参数类型和返回值类型必须一致
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}


//==============接口  可索引类型==================================================

interface StringArray {
    //索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred", "Jane"];

let myStr: string = myArray[0];



//===========类类型实现接口====================================

interface ClockInterface{
    currentTime:Date;
    setTime(d: Date);
}

class Clock implements ClockInterface{
    currentTime: Date;

    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) { }
}




//一个接口可以继承多个接口，创建出多个接口的合成接口。
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape,PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;




//==============混合类型===========================
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () {
        console.log("实现你的方法数据结构");
    };
    return counter;
}

let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;


//==================接口继承类====================================







