// [p155] 
// 1) 배열의 각 원소를 String으로 변환하시오.
// const assert = require('assert');

// const arr = [1, 2, 3, true];
// const ret1 = arr.map(<이 부분을 작성하시오>);
// assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

const assert = require('assert');

const arr = [1, 2, 3, true];
const ret1 = arr.map(a => a.toString());
console.log(ret1);
// assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);
// {/* assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']); */}


// 2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
// const classNames = (...args) => args.map(a => a.join(' '));
const classNames = (...args) => args.filter(a => !!a.trim()).join(' '); 
const ret2 = classNames('', 'a b c', 'd', '', 'e'); 
console.log(ret2);
// assert.strictEqual(ret2, 'a b c d e'); 
// // 주의: ' a b c d  e'면 안됨!!

// #example in React
// <div classNames=({x ? 'a b' : ''}, {'' ? 'c' : ''}, {z && 'e f'})

function classNames2(...args) {
    const x = args.join(' ');
    console.log('classNames2 x', x.trim().split(' '));

    // const rets = args.filter(a => !!a.trim()).join(' ');
    // console.log('classNames2 rets', rets.trim().replace('  ', ' '));

    // return rets.split().join(' ');

    return args
        .join(' ') // '  a b  c  d  e '
        .trim() // 'a b  c  d  e'
        .split(' ') // ['a', 'b', ' ', 'c', 'd', ' ', 'e']
        .filter(a => !!a.trim()) // ['a', 'b', 'c', 'd', 'e']
        .join(' '); // 'a b c d e'
}

const ret3 = classNames2('', ' a b  c ', ' d', ' ', 'e');
console.log(ret3);
// assert.strictEqual(ret3, 'a b c d e'); 