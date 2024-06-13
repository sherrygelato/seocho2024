import {v4 as uuidv4} from 'uuid'; 

const myName = 'Sico';
// let s: string | number = 'abc';
let s = 'abc'; // type check system이 타입 정의, 안적을 수록 추론이 확실히 되는 건 ㄴㄴ

console.log(`hello, ${myName}`);
console.log(`hello, ${s}`);
console.log(typeof s);

const str: string = 'abc';
type User = {id: number; name : string; addr?: string};
const user: User = {id:1, name:'name'};
user.addr = 'Seoul';

type Emp = {id: number; name : string, dept: string | number};
const emp : Emp = {
    id: 1,
    name: 'kim',
    dept: 'Sales',
};
emp.dept = 12;

// literal type
const Y = 'y';
let Z: 'x' | 'y' | 'z' = 'x';
Z = 'y';
Z = Y;
let N: 1 | 2 | 3 = 3;
N = 2;

// ? 없거나 한 개 있거나
// + 절대
// * 0개~무한대


type Member = {
    name: string,
    spend: number[],
    addr: string,
    discountRate: number;
};

type Guest = {
    name: string,
    spend: number,
    age: number,
};

const member: Member = {
    name: 'hong',
    spend: [1000, 30000, 50000],
    addr: 'yong',
    discountRate: 0.1,
 };

 const guest: Guest = {
    name: 'kim',
    spend: 5500,
    age: 28,
 };
 
 const who = Math.random() > 0.5 ? member : guest;

let totalAmount: number;
if (typeof who.spend !== 'number') {
   totalAmount = who.spend.reduce((s, c) => s + c, 0);
   console.log(typeof who);
   console.log(who.name);
   console.log(who.spend);
} else {
   totalAmount = who.spend;
   console.log(typeof who);
   console.log(who.name);
   console.log(who.spend);
}
// who.spend.reduce((s, c) => s + c, 0); // Error!!

let a: string | undefined;
console.log(a?.length); // strict true
// console.log(a.length); // strict false runtime error

const users = [
    {id: 1, name: 'Hong'},
    {id: 2, name: 'Kim'},
];
console.log(users.find(user => user.id === 2)?.['name']);

function getHong() {
    return { id: 1, name: 'Hong', addr: 'Seoul'};
};

const hong = { id: 1, name: 'Hong', addr: 'Seoul'};

type XUser = {id: number; name: string};
let xuser: XUser;
type XEmp = {id: number; name: string; addr: string};
let xemp: XEmp;

// xuser = { id: 1, name: 'Hong', addr: 'Seoul'}; // freshness
xuser = { id: 1, name: 'xuser', addr: 'Seoul'} as XUser; // 타입캐스팅
// 손으로 친 거는 실수할 수도 있음, 가공 없이 바로 온 건 freshness on
// 직접적인 매칭Exact Matching일 때는 freshness
xemp = { id: 1, name: 'xemp', addr: 'Seoul'}; // freshness
xuser = hong; // freshness가 off
// 변수에 담거나 중간에 하나 거치면 함수를 통해서 리턴을 받거나 등
xuser = getHong(); // freshness가 off

xuser = xemp; // (id, name) <= (id, name, addr) covariance
// xemp = xuser; // (id, name, addr) <= id, name) contravariance

// 구조적 타이핑
// id name
// id name addr
// 1  1    -    => true, covariance

// id name addr
// id name
// 1  1    0    => false, contravariance

function getX1(obj: XUser){
    return obj.name;
}

function getX2(obj: XEmp | XUser){
    return obj.name;
}

xuser = { id: 1, name: 'xuser Lee'};
xemp = { id: 1, name: 'xemp Kim', addr: 'Seoul'};

console.log('xuser getX1=', getX1(xuser));
console.log('xemp getX1=', getX1(xemp));

console.log('xuser getX2=', getX2(xuser));
console.log('xemp getX2=', getX2(xemp));

// strictFunctionTypes = true  (false라면 bivariance)
function f(cb: (input: string | number) => number ) { return cb(1); }
function f2(input: string | number | boolean) { return 1; }
function f3(input: string | number) { return 1; }
function f4(input: string) { return 1; }

f(f2); // OK
console.log('f(f2)', f(f2));
f(f3); // OK
console.log('f(f3)', f(f3));
// f(f4); // strictFunctionTypes가 false라면 OK, 아니면 Fail!
// console.log('f(f4)', f(f4));

const introduce = (name: string, height?: number) => {
    console.log(`이름 : ${name}`);
    if (height) console.log(`키 : ${height + 10}`); // not bad
    if (typeof height === 'number') console.log(`키 : ${height + 10}`); // great
    // error : 'height' is possibly 'undifined'
}

introduce('홍길동');
introduce('홍길동', undefined);
introduce('홍길동', 170);

const introduce2 = (name:string, 
    height : number|undefined ) => { // 반드시 height를 넣어야 함
    console.log(`이름 : ${name}`);
    if(typeof height === 'number'){
        console.log(`키 : ${height + 10}`)   
    }
}
    
const introduce3  = (name : string, age : number, height?:number, ) => { // optional parameter는 항상 뒤에!
    console.log(`이름 :  ${name}`);
    console.log(`나이 : ${age} 살`);
    if(height){
        return console.log(`키 ${height+10}cm`);   
    }
}

// return type은 parameter 뒤에 넣어야 한다.
var xfn = (x: number): number => x ** 2;
function xfn1(x: number) : number {
    return x ** 2;
}



let songLogger : (song:string) => void;

songLogger = (song) => {
    console.log(`${song}`);
    return true;  // OK
}
songLogger("HeartBeat"); // OK

const b = songLogger("HeartBeat");
console.log(`void 인데 b값 나오나:`, b);

// if (songLogger("HeartBeat")) // Error!
//   console.log('*******');

// 선언부
function addFn(a : number, b: number) : number;
function addFn(a : number, b: number, c: number) : number;

// 구현부
function addFn(a : number, b: number, c?: number) {
    if (typeof c === 'number') return a * b * c;
    return a + b;
}

// 마치 다른 함수인 것처럼
console.log(`addFn(1, 2):`, addFn(1, 2));
console.log(`addFn(1, 2, 3):`, addFn(1, 2, 3));



// 연습문제
const SIZE = [
    {id: 'XS', price: 8000},
    {id: 'S', price: 10000},
    {id: 'M', price: 12000},
    {id: 'L', price: 14000},
    {id: 'XL', price: 15000},
] as const;

const sizeOption = {XS: 1, S: 5, M: 2, L: 2, XL: 4};

// const totalPrice = SIZE.reduce((currPrice, size) =>
//     currPrice + (sizeOption[size.id] * size.price), 0
// ); // 에러 해결하는 게 문제
  
const totalPrice = SIZE.reduce((currPrice, size) =>
    currPrice + (sizeOption[size.id] * size.price), 0
);

console.log(uuidv4());

// 연습문제 type Ud2 = (TUser | TDept) & {addr: string};

interface TUser {
    id: number;
    name: string;
  }
  
  interface Dept {
    id: number;
    dname: string;
    captain: string;
  }
  interface Ud2 {
    id: number;
    name?: string;
    dname?: string;
    captain?: string;
    // <이 부분을 작성하시오>
    addr: string;
  }
  
  // 다음 코드가 오류가 없으면 통과!
  const ud2: Ud2 = {id: 1, name: 'HH', addr: 'Seoul'};
  const ud3: Ud2 = {id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul'};