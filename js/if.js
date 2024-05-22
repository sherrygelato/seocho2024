const three = 0.1 + 0.2;

if (three === 0.3) {
    console.log('OK');
} else {
    console.log('exists garbage!');
}

console.log('========== if문 연습 1');

// 1이면 one, 2면 two, 3이면 three, 그외 etc
const x = 2;

// 1. if조건문
if (x === 1) {
    console.log('one');
} else if (x === 2) {
    console.log('two');
} else if (x === 3) {
    console.log('three');
} else {
    console.log('etc');
}

console.log('========== if문 연습 2');

let outStr = 'etc';
if (x === 1) {
    outStr = 'one';
} else if (x === 2) {
    outStr = 'two';
} else if (x === 3) {
    outStr = 'three';
}
console.log(outStr);

console.log('========== if문 연습 3');

// 2. switch문

switch (x) {
    case 1 :
        console.log('one');
        break;
    case 2 :
        console.log('two');
        break;
    case 3 : 
        console.log('three');
        break;
    default :
        console.log('etc');
}

console.log('========== switch문 연습');

// 3. 3항 연산자

outStr = x === 1 ? 'one' : x === 2 ? 'two' : x === 3 ? 'three' : 'etc';
console.log(outStr);

console.log('========== 3항 연산자 연습');