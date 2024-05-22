const bi = 0b101;
const oct = 0o101;
const hex = 0x101;

console.log('bi =', bi, ', oct =', oct, ', hex =',hex);

console.log('==========');


console.log(typeof '101', parseInt('101', 36), typeof parseInt('101', 36)); // 문자열을 정수로 만들어 주세요
console.log(parseFloat('10.100', 36), typeof parseFloat('10.100', 36));
console.log(Number('10.100'), typeof Number('10.100'));

console.log('==========');

console.log(-Infinity);
console.log(isNaN(-Infinity));
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

console.log('==========');

console.log(9007199254740991 === 9007199254740991);
console.log(9007199254740991 === 9007199254740992);
console.log(9007199254740992 === 9007199254740993);

console.log('==========');

console.log(9007199254740992n === 9007199254740993n); // n붙으면 빅인트, 16바이트

console.log('==========');

console.log(Number.isInteger(0.1));

console.log('==========');

const num = 123.456;
// toFixed 반환 시 반올림을 반드시 한다는 것 유의할 점
console.log(num, num.toFixed(2), typeof num.toFixed(2)); // toFixed는 숫자를 스트링으로 리턴한다.
console.log(num, num.toFixed(2) + 9, typeof (num.toFixed(2) + 9)); // 스트링 병합 연산자
console.log(num, Number(num.toFixed(2)) + 9, typeof (Number(num.toFixed(2)) + 9));

console.log('==========');

Math.trunc(Number(num.toFixed(2)));
console.log(Math.trunc(Number(num.toFixed(2))));

console.log('==========');

console.log(0.1 + 0.2);
console.log(0.1 + 0.7);
console.log(0.3 + 0.2);