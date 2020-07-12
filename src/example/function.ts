// function add(arg1: number, arg2: number): number {
//   return arg1 + arg2;
// }

// const add1 = (arg1: number, arg2: number): number => arg1 + arg2;

let add: (x: number, y: number) => number;

add = (arg1: number, arg2: number): number => arg1 + arg2;
// add = (arg1: string, arg2: number) => arg1 + arg2; //异常

type Add = (x: number, y: number) => number;

// let addFunc: Add;

// addFunc = (arg1: number, arg2: number): number => arg1 + arg2;

const addFunc = (arg1, arg2, arg3) => arg1 + arg2 + (arg3 || 0);

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number;
let addFunction: AddFunction;
addFunction = (x: number, y: number) => x + y;

const addFunctions = (x: number, y: number = 3): number => x + y;
addFunctions(1); // 4

// const handleData = (arg1: number, ...args: number[]): number => {
//   return 1;
// };
// handleData(1, '22', 32) ==> 类型“"22"”的参数不能赋给类型“number”的参数。

//函数重载
function handleData(x: string): string[];
function handleData(x: number): number[];
function handleData(x: any): any {
  if (typeof x === "string") {
    return x.split("");
  } else {
    return x
      .toString()
      .split("")
      .map((item) => Number(item));
  }
}
handleData(222);
// handleData("abc").map(item=> item.toFixed()); ==>属性“toFixed”在类型“string”上不存在
// handleData(123).map(item => item.length);  ==>类型“number”上不存在属性“length”

export {};
