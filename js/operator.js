// let a = 1, b = 2;
let a = 1;
let b = 2;

for (let i = 0; i < 10; i++) { // 예전엔 이렇게 썼지만
    console.log(i);
}

console.log("==========");

for (let i = 0; i < 10; i = i + 1) { // 요즘은 이렇게 씀
    console.log(i);
}

console.log("==========");

let c = (a++, b++); // ++은 return보다 늦고, 최근들어 잘 쓰지 않음
// let c = ((a = a + 1), (b = b + 1));
// 오해를 불러일으키는 코드는 좋지 않은 코드다.

console.log("1) c =", c);
console.log("2) a =", a);
console.log("3) b =", b);

let d = (a--, b + a);

console.log("4) d =", d);

d = void (c = a + b); 
console.log("5) a =", a, ", b =", b, ", c =", c, ", d =", d); 
// Assignment to constant variable.
// const => let으로 바꾸기(c, d)