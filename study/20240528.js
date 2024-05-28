// p66
console.log('p66 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
// 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'};
const {passwd, ...userInfo} = user;
console.log('🚀>>  userInfo:', userInfo);


// p67
console.log('p67 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오. 

// const arr = [[{id: 1}], [{id:2}, {id: 3}]]
// cf. const id1 = arr[0][0].id;
// console.log(id1, id2, id3); 

const arr = [  [  {id: 1}  ],   [  {id:2}, {id: 3}  ]  ];
let id_1 = arr[0][0].id;
let id_2 = arr[1][0].id;
let id_3 = arr[1][1].id;
console.log('🚀>>  id_1:', id_1);
console.log('🚀>>  id_2:', id_2);
console.log('🚀>>  id_3:', id_3);

const [[{id: id1}], [{id: id2}, {id: id3}]] = arr;
console.log('🚀>>  id1:', id1);
console.log('🚀>>  id2:', id2);
console.log('🚀>>  id3:', id3);


// p65
console.log('p65 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// (Function signature를 3개 이상으로 표현하기)
// 1. function f1(x,y) {..}
// 2. var f2 = function(x,y) {...}
// 3. const f3 = (x,y) => {}  // const f3_3 = ({id,name}) => console.log(id, name);


const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};

function f1(obj) {
    console.log(`f1 obj의 id는 ${obj.id}이고, obj의 naem은 ${obj.name}입니다.`);
}
f1(hong);
f1(lee);

var f2 = function (obj) {
    console.log(`f2 obj의 id는 ${obj.id}이고, obj의 naem은 ${obj.name}입니다.`);
};
f2(hong);
f2(lee);

const f3 = (obj) => console.log(`f3 obj의 id는 ${obj.id}이고, obj의 naem은 ${obj.name}입니다.`);
f3(hong);
f3(lee);

// p112
console.log('p112 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

const array = [100, 200, 300, 400, 500, 600, 700];

// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.

for (const i in array) {
    console.log('array for-in 인덱스', i);
}

// 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)

for (const i of array) {
    console.log('arry for-of 인덱스', i);
}

const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false }

// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.

for (const i in obj) {
    console.log('obj for-in 키 이름', i);
}

// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.

for (const i in obj) {
    console.log('obj for-in 값', obj[i]);
}

// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.

for (const i of Object.values(obj)) {
    console.log('obj for-of 값', i);
}

// 6. level 프로퍼티가 열거(노출)되지 않도록 설정하시오. // Object.defineProperty


// 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty