// 2024.05.22.wed
// 문제 1~100까지 출력하기 (더하기) 5050

// 1. while

let i = 0;
while (i < 100) {
    console.log(i + 1);
    i = i + 1;
}

console.log('========== while 반복문 연습 1');

i = 0; // 초기화
let sum = 0; // 초기화
while (i < 100) {
    i = i + 1;
    sum = sum + i;
}
console.log('0부터 시작한 sum : ', sum);

console.log('========== while 반복문 연습 2');

let i_1 = 1; // 초기화
let sum_1 = 0; // 초기화
while (i_1 <= 100) {
    sum_1 = sum_1 + i_1;
    i_1 = i_1 + 1;
}
console.log('1부터 시작한 sum : ', sum_1);

console.log('========== while 반복문 연습 3');

// 2. for

for (let i = 0; i < 100; i = i + 1) {
    console.log(i + 1);
}

console.log('========== for 반복문 연습 1');

// j = 0; while (j < 5) {...}
for (let j = 0; j < 5; j++) { // j = j + 1
    console.log('j : ', j);
}

console.log('========== for 반복문 연습 2');

for (let j = 5; j > 0; j--) { // j = j - 1
    console.log('j : ', j);
}

console.log('========== for 반복문 연습 3');

for (let j = 0; j < 100; j = j + 1) {
    console.log(j + 1);
}

console.log('========== for 반복문 연습 4');

for (let j = 0, sum = 0; j < 100; j = j + 1) {
    sum = sum + j;
}
console.log('0부터 시작한 sum : ', sum);

console.log('========== for 반복문 연습 5');

sum = 0;
for (let i = 0; i < 100; i++) {
    sum = sum + (i + 1);
}
console.log('0부터 시작한 sum : ', sum);

console.log('========== for 반복문 연습 6');

sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log('0부터 시작한 sum : ', sum);

console.log('========== for 반복문 연습 7');