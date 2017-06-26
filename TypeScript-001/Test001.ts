/**
 * Created by Administrator on 2017/6/26.
 */





var Animals = (function () {
    function Animals(name) {
        console.info("打印name：" + name);
    }
    Animals.prototype.sayHi = function (name) {
        return "打印名字" + name;
    };
    return Animals;
}());
var a = new Animals("小米");
a.sayHi("aaaa");
//# sourceMappingURL=test001.js.map