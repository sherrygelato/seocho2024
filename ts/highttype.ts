// esLint 설치

// p370
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

interface Ud2_1 {
    id: number;
    // << <이 부분을 작성하시오>
    name?: string;
    dname?: string;
    captain?: string;
    // <이 부분을 작성하시오> >>
    addr: string;
}

interface Ud2_2 {
    id: number; // 최소한 공통되는 것은 포함 Ud2.id 작성
    // << <이 부분을 작성하시오>
    [k: string] : string | number; // index signature
    // <이 부분을 작성하시오> >>
    addr: string; // 최소한 공통되는 것은 포함 Ud2.addr 작성
}

// 정답
interface Ud2 {
    [k: string] : string | Number;
    id: number;
    addr: string;
}
  
// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = {id: 1, name: 'HH', addr: 'Seoul'};
const ud3: Ud2 = {id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul'};


// ==========================================================================
// Class

interface Animal {
    move(): void;
    // move: () => void;
}

class Pet implements Animal {
    //name: string;  추론 되기 때문에 name 그냥 써도 됨
    // private name;
    protected name;
    // protected age!: number; // Class 속성 - 초기화 검사, !반드시 초기화
    protected age: number = 0; // Class 속성 - 초기화 검사, undifined라도 초기화 해주는게 좋음

    // readlony literal
    // function str2obj(str: string) {} => 이거 때문에 string type 지정해줌
    readonly explicit: string = 'Hello, Typescript'; // String type
    readonly implicit = 'Hello, Typescript';  // Literal Type!

    // name은 constructor로 이미 초기화
    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(`${this.name} : Pet is moving!!`);
    }

    // getter
    getName() {
        return this.name;
    }

    
    // Class 속성 - 초기화 검사
    setAge(age: number) {
        this.age = age + 1;
    }

    getAge() {
        return this.age;
    }
}

class Dog extends Pet {
    // 모든 클래스는 생성자가 다 호출 됨
    // 부모의 생성자
    constructor(name: string, age: number) {
        super(name);
    }

    bark() {
        console.log(`Dog ${this.name} : bark!`);
    }

    howling() {
        console.log(`Dog ${this.name} : howling!`);
    }
}

class Cat extends Pet {
    // // 상속 받아서 이미 있음
    // constructor(name: string) {
    //     super(name);
    // }

    bark() {
        console.log(`Cat ${this.name} : bark!`);
    }

    kukuki() {
        console.log(`Cat ${this.name} : kukuki!`);
    }
}

// 선언부 => 실행부 => 구현부 순으로 작성

const lucy = new Dog('Lucy', 10);
lucy.bark();
const maxx = new Dog('Max', 2);
maxx.howling();
// console.log(`Dog ${maxx.name} : kukuki!`); // protected name이라 안됨
console.log(`Dog ${maxx.getName()} : howling!`); // protected name이라 gettter 씀
console.log(`Dog ${maxx.getAge()} : getAge!`);

const happy = new Cat('Happy');
happy.setAge(2); // 인스턴스 생성 후 setAge할게!
happy.bark();
happy.kukuki();

// ==========================================================================
// 클래스와 인터페이스 - 다중 인터페이스 구현
// 다중 상속 안되어서 우회 다중 상속


// 다중 상속안됨 multiple extends
// class CatDog extends Cat, Dog {
//     // 충돌 나고 안됨
// }

// 하려면 interface로 상승시킨다.
// 다중 implements
// 인터페이스 구현 x니까
// mixed in 기법을 사용한다.

interface CatImpl extends Animal {
    kukuki() : void
}

class CatDog extends Dog implements CatImpl {
    kukuki() {
        console.log(`Cat ${this.name} : kukuki!`);
        kk();
    }

    bark() {
        barkOfCat();
    }
}

function kk() {
    console.log(`CatDog======================Cat kukuki!`);
}

function barkOfCat() {
    console.log(`barkOfCat======================Cat kukuki!`);
}

// // p194, 196 mixin
// // 객체지만 impl로 해주는 것
// const petMixin = {
//     likePeople(){
//         console.log(`petMixin======================${this.name}!`);
//     }
// }

// Object.assign(lucy, petMixin);


// ==========================================================================
// Class 속성 - 메소드

// class WithProperty {
//     myProperty() {}; // 재정의 안함

//     myProperty: () => void; // call signature

//     myProperty(): void; // 이걸 더 선호
//     constructor() {
//         this.myProperty = () => {
//             console.log('Hello, this is myProperty!');
//         }
//     }
// }

// ==========================================================================
// 타입으로서의 클래스 : tructured-type-checking
class SchoolBus {
    getAbilites() {   // () => string[]
        return ['magic', 'shapeshifting'];
    }
}

function withSchoolBus(bus : SchoolBus){
    console.log(bus.getAbilites());
}

withSchoolBus(new SchoolBus()); // OK
withSchoolBus({
    getAbilites : () => ['transmogrification']            // OK (Structured-type-checking)
});


// ==========================================================================
// p387, 388
// 클래스와 인터페이스 - 다중 인터페이스 구현
// 다중 구현 규칙 (동일 속성/메소드 명)
//  - 속성 ⇒ 일치하지 않으면 Error
//  - 속성 & 함수 ⇒ 함수가 이긴다! (X)
//  - 함수 & 함수 ⇒ ContraVariance (작은 쪽 구현)
// interface 상속 규칙 (동일 속성/메소드 명)
//  - 함수는 contraVariance로 상속 가능 (부모보다 자식이 작아야)
//   ⇒ 함수 override의 경우에도 contra-variance
//  - 함수가 아닌 속성은 일치하지 않으면 Error!


interface I1 {
    // name: string; // 함수가 아닌 속성
    age: (n: number, s: string, x: boolean) => string;
    m(n: number): void;
 }
 
 interface I2 extends I1 {
    // name: number; // Error(:Exact-only)
    age: (n:number, s: string) => string;
    m(n: number): void;
 }
 
 class X implements I1 {
   age(n: number, s: string, x: boolean) {
     return n + s + x;
   }
   m(n: number) {
   }
 }
 
 class Y implements I2 {
   age(n: number, s: string) {
     return n + s;
   }
   m(n: number) {
   }
 }
 
 const x = new X(); // I1 or X
 const y = new Y();
 
 const z1: I1 = x;
 const z2: X = x;
 
 const z3: I2 = y;
 const z4: Y = y;
 
 // a: Animal = lucy; (O)
 // a: Dog = new Anmial(); (X)
 const z5: I1 = y;  // I2
 // I1(Animal) = I2(Dog)
 