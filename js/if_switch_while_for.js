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

// 4. while 반복문

let i = 5;
while ( i > 0) {
    console.log('i : ', i);
    i = i - 1; // 이거 안하면 무한루프
}

console.log('========== while 반복문 연습 1');

i = 5;
while ( i-- > 0) {
    // i  > 0 비교 후 -1 하니까 콘솔은 i-1이 찍힘
    console.log('i : ', i);
}

console.log('========== while 반복문 연습 2');

i = 5;
while (i-- > 0) console.log('i : ', i);

console.log('========== while 반복문 연습 3');

i = 5;
while ( --i > 0) {
    console.log('i : ', i);
}

console.log('========== while 반복문 연습 4');

i = 5;
do {
    console.log('i : ', i);
} while (i-- > 0);

console.log('========== do-while 반복문 연습');

// 배열 출력하기
// const arr = null;
const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr?.length; i++) {
    console.log(`arr[${i}] : ${arr[i]}`);
}

console.log('========== for 반복문 연습 1 : 배열 출력');

// 커서와 포인터의 차이
// 커서는 한번 읽으면 다음 것으로 옮김
// 카운터는 커서 방식 : 데이터(DB) 읽는 방식

for (const t of arr) { // of는 cursor
    console.log(`t : ${t}`); // 자동으로 포인터가 +1씩 움직임
}

// const t of arr
// {
//     const t = arr[0]; // 계속 반복되고 있는 중
// }

console.log('========== for 반복문 연습 2 : 배열 출력 a of arr');

const User = {
    id : 1,
    name : 'hong'
}
for (const p in User) { // p of ['id', 'name']
    console.log(`User[${p}] : ${User[p]}`);
}

console.log('========== for 반복문 연습 3 : 배열 출력 a in obj');

const WEEK_NAMES = '일월화수목금토';
for (const w of WEEK_NAMES) {
    console.log(`${w} : ${w}`);
}

console.log('========== for 반복문 연습 4 : 문자열 출력 a of str');

