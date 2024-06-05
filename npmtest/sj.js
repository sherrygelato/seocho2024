import { rand, fromNow, fromNow2 } from '../js/index.js';

console.log(rand(1, 5));
console.log(rand(1, 5));
console.log(rand(1, 5));
console.log(rand(1, 5));
console.log(rand(1, 5));
console.log(rand(1, 5));
console.log(rand(1, 5));
console.log(rand(1, 5));

console.log('fromNow=', fromNow(new Date()));
console.log('fromNow=', fromNow(new Date(), 'english'));
console.log('fromNow=', fromNow2(new Date(), 'ja'));