class Animal {
	name;
	consturctor(name) {
		this.name = name;
		console.log('Born!!', this.name);
	}
	
	bark() {
		console.log('Bark!!!');
	}
}

const ani = new Animal('Ani'); // Born!! Ani
ani.bark(); // Bark!!!

// 함수도 객체가 될 수 있다.
// 객체 중심
const obj = {
	bark() {
		console.log('obj Bark!!!');
	}
}
obj.bark(); // obj Bark!!!

export class Dog extends Animal { 
	bark() {
		console.log('Bow wow!!!'); // 부모에게 상속받은 내용 외 다른 부분만 재정의
	}
}

export default class Cat extends Animal {
	#age = 10; // private 외부에서 접근 할 수 없다, 다른 말로 캡슐화
	bark() {
		console.log('Miao', this.#age, this.name);
	}

    getAge() {
        return this.#age;
    }

    set age(_age){
        this.#age = _age;
    }

    get age() {
        return this.#age;
    }
}

const lucy = new Dog('Lucy');
lucy.bark(); // Bow wow!!!

const nabi = new Dog('Nabi');
nabi.bark(); // Miao

function speak(animal) {
	animal.bark();
}

speak(nabi); // Miao
speak(lucy); // Bow
speak(ani); // Bark!!!
                        
// speak(1); // error

// ex. Animal을 상속받은 Pig 클래스를 작성
class Pig extends Animal {
    bark() {
        console.log('꿀꿀');
    }
}

const gg2 = new Pig('꿀꿀이');
gg2.bark();

