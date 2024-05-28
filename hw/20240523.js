// 슬라이드 65~67

// // 연습문제 1
// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// (Function signature를 3개 이상으로 표현하기)

// const hong = {id: 1, name: 'Hong'};
// const lee = {id: 2, name: 'Lee'};

const Hong = {id : 1, name : 'Hong'};
const Lee = {id : 2, name : 'Lee'};

function getUserInfo1(user) { 
    console.log(`getUserInfo1 id = ${user.id}, name = ${user.name}`); 
}

var getUserInfo2 = function (user) { 
    console.log(`getUserInfo2 id = ${user.id}, name = ${user.name}`);
}
const getUserInfo3 = (user) => console.log(`getUserInfo3 id = ${user.id}, name = ${user.name}`);

getUserInfo1(Hong);
getUserInfo1(Lee);

getUserInfo2(Hong);
getUserInfo2(Lee);

getUserInfo3(Hong);
getUserInfo3(Lee);

console.log('+++++++++++ 연습문제 1 완료');


// // 연습문제 2
// 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

// const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}
// const {passwd, ...userInfo} = user;
// console.log(userInfo); 
// // 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'};
const {passwd, ...userInfo} = user;
console.log('userInfo = ', userInfo);

console.log('+++++++++++ 연습문제 2 완료');

function p66() {
    const {passwd, ...userInfo} = user;
    console.log('userInfo = ', userInfo);
}
p66();

console.log('+++++++++++ 연습문제 2 문제풀이');


// // 연습문제 3
// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오. 

// const arr = [[{id: 1}], [{id:2}, {id: 3}]]
// cf. const id1 = arr[0][0].id;
// const [ [{id:id1}], [{id:id2}, {id:id3} ] ] = arr;
// console.log(id1, id2, id3); 
// // 출력결과: 1 2 3

const arr = [[{id: 1}], [{id:2}, {id: 3}]];
// const [ [{id:id1}], [{id:id2}, {id:id3} ] ] = arr;
let id_1 = arr[0][0].id;
let id_2 = arr[1][0].id;
let id_3 = arr[1][1].id;
console.log('🚀>>  id_1:', id_1);
console.log('🚀>>  id_2:', id_2);
console.log('🚀>>  id_3:', id_3);

const [[{id: id1}], [{id: id2}, {id: id3}]] = arr;
console.log(`id1 = ${id1}, id2 = ${id2}, id3 = ${id3}`);

console.log('+++++++++++ 연습문제 2 완료');

function p67() {
    const arr = [[{id: 1}], [{id:2}, {id: 3}]];
    // const [[id1], [id2, id3]] = arr;
    const { id } = id1;
    const [[{id: id1}], [{id: id2}, {id: id3}]] = arr;
    console.log(`id1 = ${id1}, id2 = ${id2}, id3 = ${id3}`);
}
p67();

console.log('+++++++++++ 연습문제 3 문제풀이');