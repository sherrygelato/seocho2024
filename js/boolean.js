const first = 'Uncle';
// const first = '';
const last = 'Bob';

console.log(`${first} ${last}`);

console.log('-------- if문');

if (first) {
    console.log(first);
} 
console.log(last);

console.log('-------- 3항 연산자');

let fullName = first ? first + ' ' : ''
fullName = fullName + last;
// 'Uncle ' + 'Bob'
// '' + 'Bob'
console.log('fullName = ', fullName);

console.log(`Good case : ${first ? first + ' ' : ''}${last}`); // Good!
console.log(`Great case : ${first}${first && ' '}${last}`); // Great!