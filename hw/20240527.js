// 연습문제 112-114

// 연습문제 1

// const arr = [100, 200, 300, 400, 500, 600, 700];

// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
// 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)

// const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false }

// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
// 6. level 프로퍼티가 열거(노출)되지 않도록 설정하시오.
//  // Object.defineProperty
// 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty

function p112() {    
        const arr = [100, 200, 300, 400, 500, 600, 700];

    console.log('1. index(key) 출력');
    for (const k in arr) {
    console.log(k);
    }

    console.log('\n2. element(value) 출력');
    for (const k in arr) {
    console.log(arr[k]);
    }

    const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };

    console.log('\n3. for-in -> obj 이름(키)을 출력');
    for (const k in obj) {
    console.log(k);
    }

    console.log('\n4. for-in -> obj 값을 출력');
    for (const k in obj) {
    console.log(obj[k]);
    }

    console.log('\n5. for-of -> obj 값을 출력', Object.values(obj));
    for (const k of Object.values(obj)) {
    console.log(k);
    }

    Object.defineProperty(obj, 'level', { enumerable: false });
    console.log('\n6. level 프로퍼티를 노출금지', Object.entries(obj));

    Object.freeze(obj, 'role');
    obj.role = 99;
    console.log('\n7. role 프로퍼티를 읽기전용', Object.entries(obj));
}
p112();

console.log('+++++++++++ 연습문제 1 완료 & 문제풀이');


// 연습문제 2

// 1. [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)
// hint. const [k, …v] ⇒ {k: v}
// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

// 2. 위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)

// { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
// hint. [k, …obj[k]]
// => [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]

function p113() {
    function makeObjectFromArray(arr) {
        // 구현하세요!
        // 값만 필요하니까 for of 값

        for (const a of arr) {
            const k = a[0]; 
            console.log(k);
        }

        // key
        for (const [k] of arr) {
            console.log(k);
        }

        // key, value
        for (const [k, ...v] of arr) {
            console.log(k, v);
        }

        // obj
        const obj = {};
        for (const [k, ...v] of arr) {
            obj[k] = v;
        }
        console.log('obj = ', obj);
    }
    console.log('+++++++++++ 연습문제 2 완료');


      
    const objarr1 = makeObjectFromArray([
    ['A', 10, 20], // 0
    ['B', 30, 40], // 1
    ['C', 50, 60, 70], // 2
    ]);
    console.log(objarr1);
    
    function makeArrayFromObject(obj) {
        const arr = [];
        for (const k in obj) {
            // console.log(k);
            // arr.push([k, obj[k]]);
            // console.log(k, ...obj[k]);
            arr.push([k, ...obj[k]]);
        }
    }
    
    console.log('🚀>>  arrobj:', makeArrayFromObject(objarr1));
    console.log('+++++++++++ 연습문제 2 문제풀이');
}
p113();

// 연습문제 3

// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.
// // const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
// // const newKim = {...kim};
// const newKim = copyObject(kim);        // shallow copy
// newKim.addr = 'Daegu';
// console.log(kim.addr !== newKim.addr); // true면 통과!

// hint. const newObj = {};
// for (const k in obj)
// 	newObj[k] = obj[k];

function p114() {
    function copyObject() {
        const ret = {};
        for (const k in obj) {
            ret[k] = obj[k];
        }
        return ret;
    }

    const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
    const newKim = copyObject(kim);
    newKim.addr = 'Daegu';
    console.log(kim.addr !== newKim.addr);
    
}
p114();
console.log('+++++++++++ 연습문제 3 완료 & 문제풀이');