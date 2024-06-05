console.log('🚀>>>>>> gelatomasterjs');

import moment from "moment";

export const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

const LOCALE_MAPPER = {
    korea: 'ko',
    japan: 'ja',
    english: 'en',
};

export function fromNow(dt, locale = 'ko') {
    moment.locale(locale);
    return moment(dt).fromNow();
};

export function fromNow2(dt, locale = 'korea') {
    const localeCode = locale?.length < 3 ? locale.toLocaleLowerCase() : LOCALE_MAPPER[locale.toLowerCase()]
    moment.locale(localeCode);
    return moment(dt).fromNow();
};

Array.prototype.first = function () {
    return this[0];
};

Array.prototype.last = function () {
    return this[this.length-1];
};

console.log('🚀>>', fromNow(new Date()));
console.log('🚀>>', fromNow(new Date(), 'ja'));
console.log('🚀>>', fromNow(new Date(), 'zh-ch'));

console.log('🚀>>', fromNow2(new Date(), 'ENGLISH'));
console.log('🚀>>', fromNow2(new Date(), 'jaPAn'));