// call, apply, bind


// 호이스팅 가능
function f() {
    const id = 1;
    // global object(globalThis)
    console.log('fucntion this.id = ', this.id);
}

var id = 3
this.id = 'module his';
globalThis.id = 'globalThis';

f();

// 화살표 함수의 this는 상위의 this
// 오해의 소지가 없음
// 먼저 초기화 해야 한다.
const f2 = () => console.log('arrowFn this.id = ', this.id);
f2();

// 강제로 담기ㄴ
f.bind({id : 1, name: 'hong'})();

const user = {id : 2, name: 'Hong'};
const newF = f.bind(user);
newF();

f.bind(user)();
f.call(user);
f.apply(user);

function f3(x, y) {
    const id = 1;
    console.log('arrowFn this.id = ', this.id);
    console.log('x, y = ', x, y);
}
f3.call(user, 2, 22);
f3.apply(user, [3, 33]);
f3.call(globalThis, 2, 22);