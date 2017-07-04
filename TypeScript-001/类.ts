/**
 * Created by Administrator on 2017/6/28.
 */


//关于类的介绍使用
//============对象初始化======================
class Greenter{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }

    greet(){
        return "Hello,"+this.greeting;
    }
}
let greeter=new Greenter("world");
console.log(greeter.greet())



//============类继承=========================

//注意：构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承

class Animal{
  //参数属性可以方便地让我们在一个地方定义并初始化一个成员
    constructor(private name:string){};
    move(distanceInMeters:number=0){
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

class Snake extends  Animal{
    constructor(name:string){ super(name)};
    move(distanceInMeters=5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}






class Horse extends Animal{


    constructor(name:string){ super(name)}
    //在子类里可以重写父类的方法
    //必须调用super()，它会执行基类的构造方法。
    move(distanceInMeters=45){
        console.log("Galloping...");
        super.move(distanceInMeters)
    }
}

let sam=new Snake("Sammy the Python");

let tom:Animal=new Horse("Tommy the palomino");

sam.move();
tom.move(34);

//readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // error! name is readonly.




//===============存取器==============================
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    //当给fullName赋值的时候会调用该方法
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode a") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log("打印fullName属性的值:"+employee.fullName)
}



//=======================抽象类========================
// 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

abstract class Person{
    abstract makeSound():void;
    move():void{
        console.log(`roaming the earch...`);
    }
}

abstract class  Department{
    constructor(public  name :string){

    }

    printName():void{
        console.log(`Department name:`+this.name);
    }

    abstract printMeeting():void//必须在派生类中实现
}


class  AccountingDepartment extends Department{
    constructor(){
        super(`Accounting and Auditing`);
    }

    printMeeting():void{
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}


let department: Department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports(); // error: method doesn't exist on declared abstract type




