let a = 1, b = 2;        // let a = 1; let b = 2;
let c = (a++, b++);      // 쉼표 연산자와 할당 연산자 ⇒ 증감연산자
let d = (a--, b + a);    // a++; let d = b + a;
console.log(a, b, c, d); // ?