// for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
// for(let i = 0.1; i < 1; i = i + 0.1) console.log(i);  // right??
// 0.1
// 0.2
// 0.3
// 0.4
// 0.5
// 0.6
// 0.7
// 0.8
// 0.9
// 1 

for (let i = 0.1; i < 1; i = i + 0.1) {
    console.log(i);
};

console.log('========== 과정 1');

for (let i = 0.1; i < 1; i = i + 0.1) {
    console.log(i.toFixed(1));
};

console.log('========== 과정 2');

for (let i = 0.1; i < 1; i = i + 0.1) {
    console.log(Math.trunc((i.toFixed(2)) * 10) / 10);
};

console.log('========== 과정 3');

for (let i = 0.1; i < 1; i = i + 0.1) {

};