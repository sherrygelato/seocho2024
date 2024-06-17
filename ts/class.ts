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
 

// ==========================================================================
// p390 클래스 확장
// 다른 클래스를 확장하거나 하위 클래스를 만드는 자바스크립트 개념에 타입 검사 추가
// 기본 클래스에 선언된 모든 메서드나 속성은 파생 클래스라고도 하는 하위 클래스에서 사용할 수 있음
// Teacher는 StudentTeacher 하위 클래스의 인스턴스에서 사용할 수 있는 teach 메서드를 선언
class Teacher {
    teach(){
        console.log('teaching!');
    }
}

class StudentTeacher extends Teacher {
    learn(){
        console.log('Learning!');
    }
}
const teacher1 = new StudentTeacher();

teacher1.teach() // OK (기본 클래스에 정의됨)
teacher1.learn() // OK (하위 클래스에 정의됨)

// const teacher2 : StudentTeacher = new Teacher(); // Fail 
const teacher3 : Teacher = new StudentTeacher(); // OK


// ==========================================================================
// (상속) - 할당 가능성 확장
// 하위 클래스도 기본 클래스의 멤버를 상속함. 
// 하위 클래스의 인스턴스는 기본 클래스의 모든 멤버를 가지므로
// 기본 클래스의 인스턴스가 필요한 모든 곳에서 사용할 수 있음
class Lesson {
    subject : string;

    constructor(subject : string) {
        this.subject = subject;
    }
}

class OnlineLesson extends Lesson {
    // url : string; // fail
    url? : string; // ok

    // constructor(subject : string, url : string){ // fail
    constructor(subject : string, url? : string){ // ok
        super(subject);
        this.url = url;
        this.subject = '';
    }
}

let lesson : Lesson;

lesson = new Lesson('coding');
lesson = new OnlineLesson('coding', 'orelly.com');

let online : OnlineLesson;

online = new OnlineLesson('coding', 'orelly.com');
online = new OnlineLesson('coding');
// Error : Expected 2 arguments, but got 1.(2554)
// An argument for 'url' was not provided.


// ==========================================================================
// 클래스 확장 - 할당 가능성 확장 (Cont'd)
class PastGrades{
    grades : number[] = [];
}
    
class LabeledPastGrades extends PastGrades{
    label ? : string; // 있으나 마나! ==> 부모와 동일구조
}

let subClass : LabeledPastGrades;
    
subClass = new LabeledPastGrades(); // OK
subClass = new PastGrades(); // OK
// LabeledPastGrades는 선택적 속성인 PastGrades만 추가하므로 하위 클래스 대신 기본 클래스의 인스턴스를 사용할 수 있음


// ==========================================================================
// 클래스 확장 (extends) - 재정의(override)된 생성자
class GradeAnnouncer {
    message: string;

    constructor(grade : number) {   // new GradeAnnouncer(필수number) vs new PassingAnnoucer()
        this.message = grade >= 65 ? 'Maybe next time...' : 'You pass!'
    }
}

class PassingAnnoucer extends GradeAnnouncer {
    constructor() {
        super(100); // super는 부모의 생성자, grade 필수
    }
}

class FailingAnnouncer extends GradeAnnouncer {
    constructor() {
        super(0); // 자식의 생성자에서는 부모의 생성자를 반드시 super로 불러줘야 한다
    }
    //Error : Constructors for derived classes must contain a 'super' call.
}


// ==========================================================================
// 클래스 확장 - 재정의된 생성자 (Cont'd)
class GradeTally {

    grades : number[] = [];

    // constructor(){} // 컴파일 될 때 이게 생략된 거여도 붙는다 ㅇㅇ

    addGrades(...grades : number[]){
        this.grades.push(...grades);

        return this.grades.length;
    }
}
    
class ContinuedGradesTally extends GradeTally{

    constructor(previousGrades : number[]){

        super(); // OK
        this.grades = [...previousGrades];
        //Error : 'super' must be called before accessing 'this' in the constructor of a derived class.
        //하위 클래스의 생성자는 this 또는 super에 접근하기 전에 반드시 기본 클래스의 생성자를 호출해야함!
        //super()를 호출하기 전에 this 또는 super에 접근하려고 하는 경우 타입 오류를 보고함
     
        // super(); // fail
    
        console.log('Starting with length', this.grades.length);
    }
}


// ==========================================================================
// 클래스 확장 - 재정의(override)된 메서드
// 부모의 변수/함수보다 명세가 작으면 OK!
// 하위 클래스의 메서드가 기본 클래스의 메서드에 할당될 수 있는 한 하위 클래스는 기본 클래스와 동일한 이름으로 새 메서드를 다시 선언할 수 있음
// call signature가 다른 경우
class GradeCounter {
    countGrades(grades : string[], letter : string) {
        return grades.filter(grade => grade === letter).length; // return number
    }
}

// 기본(super)의 GradeCounter의 반환 타입과 매개변수가 작기 때문에 허용
class FailureCounter extends GradeCounter{
    // countGrades() {  // OK(:작기 때문에)
    countGrades(grades : string[]) {
        return super.countGrades(grades, 'F'); // return number
    }
}

class AnyFailureChecker extends GradeCounter {
    // countGrades(grades : string[]){
    // //Type '(grades: string[]) => boolean' is not assignable to type '(grades: string[], letter: string) => number'.
    // // Type 'boolean' is not assignable to type 'number'.
    // 	return super.countGrades(grades, 'F') !== 0;  // return boolean
    // }
} //AnyFailureChecker의 countGrades는 잘못된 반환 타입을 가지므로 타입 오류가 발생


// ==========================================================================
// 클래스 확장 - 재정의된 속성(멤버 변수)
class Assignment {
    grade? : number; // 기본 클래스에서 number | undefined로 선언
    // grade : number | undefined; // cf. 이것도 OK?? ok
    // grade! : number | string; // ok
}

class GradedAssignment extends Assignment {
    grade : number;
    // grade : number | string; // fail 범위가 작아져야 함


    // 하위 클래스에서 grade를 필수(항상 존재하는) number 타입으로 선언
    constructor(grade : number) {
        super();
        this.grade = grade;
    }
}

// new Assignment().grade?.toFixed(2);
new GradedAssignment(3).grade.toFixed(2);


// ==========================================================================
// 클래스 확장 - 재정의된 속성 (Cont'd)
// 속성의 유니언 타입의 허용된 값 집합을 확장할 수는 없음.  하위(자식) 클래스는 더 구체적(작아야)이여야 함!!
// 만약 확장한다면 하위 클래스 속성은 더 이상 기본 클래스 속성 타입에 할당할 수 없음
class NumericGrade {
    // value = 0; // fail
    value: number | string = 0;
}

class VagueGrade extends NumericGrade {
    value = Math.random() > 0.5 ? 1 : '...'; // number | string
    // Error : Property 'value' in type 'VagueGrade' is not assignable to the same property in base type 'NumericGrade'.
    // Type 'string | number' is not assignable to type 'number'.
    // Type 'string' is not assignable to type 'number'.

} // VagueGrade의 value는 기본 클래스 NumericGrade의 number 타입에 | string을 추가하려고 하므로 타입 오류가 발생함

const instance4 : NumericGrade = new VagueGrade();

// 예상한 타입 : number
// 실제 타입 : number | string 부모의 타입으로 가져옴
instance4.value;


// ==========================================================================
// p399 연습문제
// 학생과 전학생이 있다. 모든 학생은 급식을 먹을 수 있지만, 청소에서는 전학생은 제외된다.
// 위 상황을 객체지향으로 작성하시오.
// (전학생은 학생의 모든 속성을 갖으며, 함수는 급식과 청소 두 가지가 외부에 있다)

class Student1 {
    name!: string;

    schoolMeal1() {
        console.log(`${name}을 포함한 모든 학생은 급식을 먹습니다.`);
    }

    cleaning1() {
        console.log(`전학생이 아닌 모든 학생은 청소를 합니다.`);
    }
}

class TransferStudent1 extends Student1 {

    cleaning1() {
        throw new Error(`전학생인 ${name}은 청소에서 제외됩니다.`);
    }

}

/////////////////

class Student2 {
    name!: string;
}

class TransferStudent2 extends Student2 {

}

function cleaning2(student : Student2) {
    if (typeof student === typeof TransferStudent2)
        console.log(`전학생이 아닌 모든 학생은 청소를 합니다.`);
}

function schoolMeal2(student : Student2) {
    console.log(`${name}을 포함한 모든 학생은 급식을 먹습니다.`);
}

let student_a: Student2 = {name: '#학생#'};
let student_b: TransferStudent2 = {name: '@전학생@'};

cleaning2(student_a);
cleaning2(student_b);

schoolMeal2(student_a);
schoolMeal2(student_b);


// ==========================================================================
// convariance, contravariance
// oop 상속, 다양성 관계