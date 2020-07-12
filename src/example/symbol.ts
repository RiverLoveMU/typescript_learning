const s1 = Symbol();
console.log(s1);
const s2 = Symbol();
console.log(s2);
// console.log(s1 === s2); ===>false Symbol是独一无二的

const s3 = Symbol("lison");
console.log(s3);

const s4 = Symbol("lison");
// console.log(s3 === s4); ===>false Symbol是独一无二的,传入字符串只是个标识

console.log(s4.toString()); //==>Symbol(lison)
console.log(Boolean(s4)); //==> true
console.log(!s4); //==> false

let prop = "name";
const info = {
  //   name: "lison",
  [prop]: "lison",
  [`my${prop}is`]: "lison",
};

const s5 = Symbol("name");

const info2 = {
  [s5]: "lison",
  age: 18,
  sex: "man",
};
console.log(info2); //==> {Symbol(name): "lison"}
info2[s5] = "wow";
console.log(info2); //==> {Symbol(name): "wow"}

for (const key in info2) {
  console.log(key); //不打印Symbol
}

console.log(Object.keys(info2)); // ==> ["age", "sex"]

console.log(Object.getOwnPropertyNames(info2)); // ==> ["age", "sex"]

console.log(JSON.stringify(info2)); // ==> {"age":18,"sex":"man"}

console.log(Object.getOwnPropertySymbols(info2)); // ==> [Symbol(name)]

console.log(Reflect.ownKeys(info2)); // ==>["age", "sex", Symbol(name)]

//Symbol.for() Symbol.keyFor();

const s6 = Symbol("lison");
const s7 = Symbol("lison");

const s8 = Symbol.for("lison");
const s9 = Symbol.for("lison"); // 会在全局范围中搜索是否用这个字符串创建过值，若存在就将之前创建的赋值给它，否则重新创建
const s10 = Symbol.for("haha");

// console.log(s8 === s9) ==> true;
// console.log(s6 === s9) ==> false;

console.log(Symbol.keyFor(s8)); //==>lison
console.log(Symbol.keyFor(s6)); //==>undefined

//instanceof
const obj1 = {
  [Symbol.hasInstance](otherObj: any) {
    console.log(otherObj);
  },
};

console.log({ a: "a" } instanceof (obj1 as any)); //==> {a: "a"} false

let arr1 = [1, 2];
console.log([2].concat(arr1, [2, 3])); //=>[2, 1, 2, 2, 3]
console.log(arr1[Symbol.isConcatSpreadable]); //=>undefined
arr1[Symbol.isConcatSpreadable] = false;
console.log([2].concat(arr1, [2, 3])); //=>[2, Array(2), 2, 3]
console.log(arr1[Symbol.isConcatSpreadable]); //=>false

class C extends Array {
  constructor(...args) {
    super(...args);
  }
  static get [Symbol.species]() {
    return Array;
  }
  getName() {
    return "lison";
  }
}
const c = new C(1, 2, 3);
const a = c.map((item) => {
  return item;
}); //==> C(3) [1, 2, 3]
console.log(c instanceof C); // false
console.log(c instanceof Array); // true
console.log(a instanceof C); // false
console.log(a instanceof Array); // true

// Symbol.match
let obj2 = {
  [Symbol.match](ss) {
    console.log(ss.length);
  },
  [Symbol.split](ss) {
    console.log("split", ss.length);
  },
};

//Symbol.replace
//Symbol.search
//Symbol.split

"abcde".match(obj2 as any); // ==> 5
"abcde".split(obj2 as any); // ==> split 5

//Symbol.iterator
const arr999 = [1, 2, 3];
const iterator = arr999[Symbol.iterator]();
console.log(iterator); //Array Iterator {}
console.log(iterator.next()); //==>{value: 1, done: false}
console.log(iterator.next()); //==>{value: 2, done: false}
console.log(iterator.next()); //==>{value: 3, done: false}
console.log(iterator.next()); //==>{value: undefined, done: true}
console.log(iterator.next()); //==>{value: undefined, done: true}

//Symbol.toPrimitive
let obj4: unknown = {
  [Symbol.toPrimitive](type) {
    console.log(type); //==>number
  },
};

const res = (obj4 as number)++;
console.log(res);

//Symbol.toStringTag
// let obj5 = {
//   [Symbol.toStringTag]: "lison",
// };
// console.log(obj5.toString()); //==>[object lison]
let obj5 = {
  get [Symbol.toStringTag]() {
    return "lison";
  },
};
console.log(obj5.toString()); //==>[object lison]

// Symbol.unscopables
const obj6 = {
  a: "a",
  b: "b",
};

// with (obj6) {
//   console.log(a);  ==>a
//   console.log(b);  ==>b
// }

console.log(Array.prototype[Symbol.unscopables]); // {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
