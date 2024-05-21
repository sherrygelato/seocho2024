// let a = 1, b = 2;
let a = 1;
let b = 2;

const c = (a++, b++); // ++은 return보다 늦다
console.log("1) c =", c);
console.log("2) a =", a);
console.log("3) b =", b);

// console.log("==========");

const d = (a--, b + a);
console.log("4) d =", d);