/**
 * Created by Administrator on 2017/7/4.
 */
/**
 * 模块在其自身的作用域里执行，而不是在全局作用域里；这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，
 * 除非你明确地使用export形式之一导出它们。 相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，
 * 你必须要导入它们，可以使用 import形式之一。
 * */
export const COMPANY = 'EG';    // 导出变量

export interface IdentiryValidate {    // 导出接口
    isValidate(s: string): boolean;
}



export class ErpIdentityValidate implements IdentiryValidate {    // 导出类
    isValidate(s: string) {
        return true;
    }
}

//  export { ErpIdentityValidate }   //也可以这样导出类
export { ErpIdentityValidate as EGIdentityValidate };    // 导出并重命名


//有时候我们需要修改和扩展已有的模块，并导出供其他模块调用，这时，可以时候模块包装来再次导出，其称为 “重新导出” 。
export { ErpIdentityValidate as EGIdentityValidate01 } from './ErpIdentityValidate';



//一个模块可以包裹多个模块，并把新的内容以一个新的模块导出，示例代码如下：
export * from './IdentiryValidate';
export * from './ErpIdentityValidate';




//导入一个模块
import { ErpIdentityValidate } from "./ErpIdentityValidate";
let erpValide = new ErpIdentityValidate();


//别名导入
import { ErpIdentityValidate as ER} from "./ErpIdentityValidate";
let erpValide = new ERP ();


//可以对整个模块进行别名导入，将整个模块导入到一个变量，并通过这个变量来访问模块的导出部分
import * as validator from "./ErpIdentityValidate";
let myValidate = new validator.ErpIdentityValidate();