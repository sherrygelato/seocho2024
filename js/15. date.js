// var moment = require('moment'); // CJS 방식
import moment from 'moment'; // ESM 방식, package.json에 "type": "module", 추가
// import { Cat } from './13. oop.js'; // export default 여부
import Cat, { Dog } from './13. oop.js';

console.log('=================================================');

const locale = ['us', 'ko', 'ja', 'zh-cn'];
moment.locale(locale[1]);

const d = new Date();
console.log('🚀>>>>>>  d:', d);
console.log('🚀>>>>>>  d:', d.toLocaleString());
console.log();

const m = moment();
console.log('🚀>>>>>>  m:', m.toLocaleString());
console.log('🚀>>>>>>  LLL:', m.format('LLL'));
console.log('🚀>>>>>>  dddd:', m.format('dddd'));
console.log('🚀>>>>>>  m:', m.format('YYYY-MM-DD(ddd) hh:mm:ss'));
console.log();

const writtenDate = moment('2024-04-30');
console.log('🚀>>>>>>  writtenDate:', writtenDate.fromNow());

const nabi = new Cat('nabi');
const lucy = new Dog('lucy');