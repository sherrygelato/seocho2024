// ==========================================================================
// p399 연습문제
// 학생과 전학생이 있다. 모든 학생은 급식을 먹을 수 있지만, 청소에서는 전학생은 제외된다.
// 위 상황을 객체지향으로 작성하시오.
// (전학생은 학생의 모든 속성을 갖으며, 함수는 급식과 청소 두 가지가 외부에 있다)

class Student {
    name;
    constructor(name: string) {
        this.name = name;
    }

    급식() {
        console.log(`${this.name}아, 급식!!`);
    };

    청소() {
        console.log(`${this.name}아, 청소를 합시다!!`);
    };
}

class TransferStudent extends Student {
    disTransfer = true;

    청소() {
        throw new Error(`전학생인 ${this.name}은 청소에서 제외됩니다.`);
    }
}

const s = new Student('학생');
const t = new TransferStudent('전학생');

// 메소드 처리 
s.급식();
s.청소();

t.급식();
t.청소();


// 외부 처리 
function o급식(student : Student) {
    console.log(`${student.name}아, 급식!!`);
}

function o청소(student : Student) {
    if (student instanceof TransferStudent) throw new Error(`전학생인 ${student.name}은 청소에서 제외됩니다.`);
    else console.log(`${student.name}는 전학생이기 때문에 청소하지 않습니다.`);
}

o급식(s);
o급식(t);

o청소(s);
o청소(t);