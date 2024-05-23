// front면 이 부분 매우 중요

// 배열 (객체)
const arr = [1, 2, 3, 4, 5];

let [a, b, ...c] = arr; 
// let a = arr[0], b = arr[1], c = [3, 4, 5];

[a, b] = [b, a]; // 스왑
// let a = 1, b = 2; a = b; t = a ; 이런 식으로 스와핑

// 객체
// const { id, name } = { id: 1, name: 'Hong' }; // let id = user.id;

// 클래스 (객체)
class A {
    constructor (x, y) {
        a = x;
        b = y;
    }
}
const x = new A(1, 2);
const {i, j} = x;
// 즉 const a=1; const b=2;

// arr to obj
const {'0':a1, '1':a2} = [1,2];  
// {'0':a1, '1':a2} = {'0':1, '1':2, length: 2}
// a1 = 1, a2 = 2
// 오해의 소지가 있기 때문에 이런 코드는 거의 보기 힘들다.

// Object Destructuring 
// 반드시 복습
// 객체는 트리로 생각하면 쉽다.

// const user = { id: 1, name: 'Hong', addr: { city: 'Seoul', road: '길' } };
// const id = user.id;  ⇒ ⇒ const { id: id } = user;  ⇒ ⇒ const { id } = user;
// const { id: userId, name: userName } = user;  ⇒ ⇒ console.log(userId, userName);
// const { id, addr } = user;      const { city } = addr;  // city = 'Seoul'
//  ⇒ ⇒ const { id, addr: { city } } = user; // city = 'Seoul'
//  ⇒ ⇒ const { id, addr: { city: addrCity } } = user;  // addrCity = ? Seoul
// const arr = [1, 2, 3, 4, 5];  // {0: 1, 1: 2, …}
// const {1: x1, 3: x2} = arr;   // x1 = 2, x2 = ? 4
// const mainField = user.id > 5 ? 'name' : 'addr';  
// const { [mainField]: target } = user;  // target = { city: 'Seoul' }
//   // const { 'addr': ttt } = user; ⇐ 가능!
// target ='Kim';  // Uncaught TypeError: Assignment to constant variable.
// const { name: target } = user;  // ONLY Browser Console Available!! ('이미 선언되었어요!')


const user = { 
    id: 1, 
    name: 'Hong', 
    addr: { 
        city: 'Seoul', 
        road: '길' 
    }
};

const { id, addr : {city : addrCity}} = user;
console.log(id);
console.log(addrCity);

// const X = 'id';
// const {X} = user;
// const {[X]} = user;

// rest 연산자 할당
// spread 연산자 펼쳐줘(새로 생성)

// 2024.05.23 thu
function f() {
    console.log('f() arguments = ', arguments);
}
f(1, 2, 33, 44);

function f2(...args) {
    console.log('f2() args = ', args);
}
f2(11, 22, 33);

var f3 = function (...args) {
    console.log('f3() args = ', args);
}
f3(9, 0);

function f4() { return 1;} // 선언문만 있음
var f5 = function () {}; // 함수표현식(선언+값), 함수 자체가 literal이 된 것
const f6 = () => 1; // return하는 값도 있음

const obj = {
    id : 1,
    fn1: function () { console.log(arguments)},
}

const {fn1} = obj;
fn1(1, 2, 3) 

// const { 
//     fn1 : {name: nm},
// } = obj;
// console.log('name = ', name);

var user1 = {id: 1, name: 'P', age: 33}
const [k, v] = Object.entries(user1);
console.log('user key =', k);
console.log('user value =', v);