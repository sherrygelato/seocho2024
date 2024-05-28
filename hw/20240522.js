// 슬라이드 50~53

// 연습문제 1
// for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
// for(let i = 0.1; i < 1; i = i + 0.1) console.log(i);  // right??
// 0.1
// 0.2
// 0.3
// 0.4
// 0.5
// 0.6
// 0.7
// 0.8
// 0.9
// 1 

// toFixed(), Number(), parseInt(), parseFloat() 문제

function p50() {
    for (let i = 0.1; i < 1; i = i + 0.1) {
        console.log(i);
    }

    console.log('========== 과정 1');

    for (let i = 0.1; i < 1; i = i + 0.1) {
        console.log(i.toFixed(1));
    }

    console.log('========== 과정 2');

    for (let i = 0.1; i < 1; i = i + 0.1) {
        console.log(Math.trunc((i.toFixed(2)) * 10) / 10);
    }

    console.log('========== 과정 3');

    for (let i = 0.1; i < 1; i = i + 0.1) {
        console.log(Number(i.toFixed(1)), typeof Number(i.toFixed(1)));
    }

    console.log('+++++++++++ 연습문제 1 완료');

    for (let i = 0.1; i < 1; i = i + 0.1) {
        console.log(+i.toFixed(1)); // + 연산자 사용!
    }

    console.log('+++++++++++ 연습문제 1 풀이해설');
}
p50();

// 연습문제 2
// 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오. 
// // Math.sqrt() 사용, 무리수만 출력!
// 2 1.414
// …
// 7 2.646
// …
// 10 3.162

// toFixed 문제

function p51() {
    for (let i = 1; i <= 10; i += 1) {
        const sq = +Math.sqrt(i).toFixed(3);
        // if (sq % 1 !== 0 ) console.log(i, sq); // good
        console.log('+++++++++++ 연습문제 2 완료');

        if (sq % 1) console.log(i, sq); // great
        console.log('+++++++++++ 연습문제 2 풀이해설');
    }
}
p51();

// 연습문제 3
// 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
// // const today = new Date();  today.getDay(); // 요일번호
// 오늘은 금요일입니다.  (일월화수목금토)

function p52() {
    const dt = new Date();
    const WEEK_DATE = '일월화수목금토';

    console.log(`dt : ${dt}, locale : ${dt.toLocaleDateString()}`);
    console.log(`요일 번호 : ${dt.getDay()}`);

    console.log(`오늘은 ${WEEK_DATE[dt.getDay()]}요일 입니다.`);

    console.log('+++++++++++ 연습문제 3 완료');

    // switch문
    let wname;
    switch (dt) {
        case 0 :
            wname = '일'
            break;
        case 1 :
            wname = '월'
            break;
        case 2 :
            wname = '화'
            break;
        case 3 :
            wname = '수'
            break;
        case 4 :
            wname = '목'
            break;
        case 5 :
            wname = '금'
            break;
        case 6 :
            wname = '토'
            break;
    }
    console.log(`오늘은 ${wname}요일 입니다.`);
    console.log('+++++++++++ 연습문제 3 풀이해설');
}
p52();


// 연습문제 4
// 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
// (단, 소숫점 자리수는 긴쪽에 맞춘다)

// 0.21354 + 0.1   // 0.31354000000000004
// 0.14 + 0.28     // 0.42000000000000004
// 0.34 + 0.226    // 0.5660000000000001
// function addPoints(a, b) {...}

// addPoints(0.21354, 0.1)   // 0.31354
// addPoints(0.14, 0.28)     // 0.42
// addPoints(0.34, 0.226)    // 0.566

function p53 () {
    function getLen(str) {
        return (a ?? '').toString().length;
    }

    function addPoints1(a, b) {
        let len = getLen(a);
        if (getLen(b) > len) len = getLen(b);

        const result = (a + b).toFixed(len - 2);
        return + result;
    }

    console.log('+++++++++++ 연습문제 4 완료');

    function getLen(str) {
        return (a ?? '').toString().length;
    }

    function addPoints2(a, b) {
        // const aLen = getLen(a);
        // const bLen = getLen(b);
        // const length = aLen > bLen ? aLen : bLen; // good

        const length = Math.max(getLen(a), getLen(b)); // great
        const result = (a + b).toFixed(len - 2);
        return + result;
    }
    console.log('+++++++++++ 연습문제 4 문제풀이');


    addPoints1(0.12345, 0.123);
    addPoints2(0.12345, 0.123);
}
p53();