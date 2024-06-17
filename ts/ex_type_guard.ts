// ==========================================================================
// 연습문제 421 keyof - typeof
// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};
  
type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart; // 정답:) 굿!ㅋㅋ

// 문제2) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
} as const;
console.log(constCart['Y']);
  
type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart]; // 정답:) 굿!ㅋㅋ


// ==========================================================================
// 연습문제 422
// 다음에서 '가', '나', '다' 어떤 걸 throw 해도 에러 메시지를 출력하도록 (라) 부분을 수정하시오.
try {
    // throw new Error('some error!!!!');   // 가
    // throw 'some string error!!!';        // 나
    throw ['some', 'array', 'error'];       // 다
} catch (error) {
    console.log((error as Error).message); // (라)
    
    // 정답
    if (error instanceof Error)
        console.log(error.message);
    else console.log(error);
}

