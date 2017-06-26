/**
 * Created by Administrator on 2017/6/26.
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
/**
 * 需要注意的是，我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。我们只会去关注值的外形。
 * 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
 *
 * printLabel方法参数里面指定传入一个LabelledValue接口对象， 我们在构建对象的时候只需要保证参数名字和类型一致即可
 *
 * */
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
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
var mySquare = createSquare({ color: "black" });
console.log("\u53EF\u9009\u53C2\u6570\u53D6\u5F97\u7684\u7ED3\u679C\u503C color\uFF1A" + mySquare.color + " \uFF0C area\uFF1A" + mySquare.area + " ");
var p1 = { x: 10, y: 20 };
//p1.x = 5; // error,只读属性无法再次修改啦!
//它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
var ro = a;
