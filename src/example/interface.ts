interface NameInfo {
  firstName: string;
  lastName: string;
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`;
};

getFullName({
  firstName: "haha",
  lastName: "Li",
});

interface Vegetable {
  color?: string; // 可填可不填
  readonly type: string; // 只读
  // [prop: string]: any; // 设置任意属性
}

const getVegetables = ({ color, type }: Vegetable) => {
  return `A ${color ? color + " " : " "}${type}`;
};

const vegetableInfo = {
  type: "tomato",
  color: "red",
  size: 2,
}; // 类型兼容性 vegetableInfo 有的赋值的对象都有 多了无所谓

getVegetables(vegetableInfo);

const vegetableObj: Vegetable = {
  type: "tomato",
};

// vegetableObj.type = 'carrot' ===>Cannot assign to 'type' because it is a read-only property

interface ArrInter {
  0: number;
  readonly 1: string;
}

const arr: ArrInter = [1, "a"];

// arr[1] = 'b'; ==>Cannot assign to '1' because it is a read-only property

interface FuncAndNum {
  (num1: number, num2: number): number; //函数
  color?: string;
}

type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (n1, n2) => n1 + n2;

// interface RoleDic {
//   [id: number]: string;
// }
// const role1: RoleDic = {
//   0: 'super_admin'
// }

interface RoleDic {
  [id: string]: string;
}
const role2: RoleDic = {
  a: "super_admin",
  1: "admin",
};

interface Vegetables {
  color: string;
}

// interface Tomato {
//   color: string;
//   radius: number;
// }
interface Tomato extends Vegetables {
  radius: number;
}

interface Carrot extends Vegetables {
  length: number;
}

const tomato: Tomato = {
  radius: 1,
  color: "red",
};

const carrot: Carrot = {
  length: 1,
  color: "orange",
};

interface Counter {
  (): void;
  count: number;
}

const getCounter = (): Counter => {
  const c = () => {
    c.count++;
  };
  c.count = 0;
  return c;
};

const counter: Counter = getCounter();
counter();
console.log(counter.count); // 1
counter();
console.log(counter.count); // 2
counter();
console.log(counter.count); // 3

export {};
