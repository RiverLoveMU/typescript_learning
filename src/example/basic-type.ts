// 布尔类型
// let bool: boolean = false;
let bool: boolean;
bool = true;

//数值类型
let num: number = 123;
num = 0b1111011; //二进制
num = 0o173; //八进制
num = 0x7b; //十六进制

//字符串类型
let str: string;
str = "abc";
str = `数值是${num}`;

console.log(str);

//数组类型
//[1,2,3,4]
// 写法1
let arr: number[];
arr = [2, 5];
//写法2
arr = [2, 5];
let arr3: (string | number)[];
let arr4: (number | string)[];
arr3 = [2, "2323"];
arr4 = [2, "2323"];

//元祖类型
let tuple: [string, number, boolean]; //顺序长度必须匹配
tuple = ["sd", 123, false];

//枚举类型
enum Roles {
  SUPER_ADMIN = "JACK", //设置名称
  ADMIN = 4, //设置序列号
  USER,
}
console.log(Roles);
console.log(Roles.SUPER_ADMIN);
console.log(Roles[4]);
let role: Roles;
role = Roles.SUPER_ADMIN;
console.log(role);

//any类型
let value: any;
value = "abc";
value = 213;
value = false;
const arr5: any[] = [1];

//void类型
const consoleText = (text: string): void => {
  console.log(text);
};

let v: void;
v = undefined;
// v = null; 严格模式会报错
consoleText("232");

// null和undefined
let u: undefined;
u = undefined;
let n: null;
n = null;
// num = undefined  严格模式会报错
// num = null  严格模式会报错

// never类型  是所有类型的子类型
const errorFunc = (message: string): never => {
  throw new Error(message);
};
const infiniteFunc = (): never => {
  while (true) {
    console.log(111);
  }
};
// let neverVariable:never = (()=>{
//     while(true){}
// })()
// num = neverVariable

//object
const obj: object = {
  name: "listen",
};
function getObject(objs: object): object {
  return objs;
}
getObject(obj);

//类型断言
// const getLength = (target: string | number): number => {
//   if (target.length || target.length === 0) {
//     return target.length;
//   } else {
//     return target.toString().length;
//   }
// };  length会报错因为number不存在length
const getLength = (target: string | number): number => {
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length;
  } else {
    return target.toString().length;
  }
}; // 断言为string, 若使用jsx只能使用as

export {};
