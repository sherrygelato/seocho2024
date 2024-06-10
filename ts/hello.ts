const myName = 'Sico';
// let s: string | number = 'abc';
let s = 'abc'; // type check system이 타입 정의, 안적을 수록 추론이 확실히 되는 건 ㄴㄴ

console.log(`hello, ${myName}`);
console.log(`hello, ${s}`);
console.log(typeof s);