const fruitOrange = {
  name: 'orange',
  price: 2.99,
  quantity: 2
}

const fruitApple = {
  name: 'apple',
  price: 10.99,
  quantity: 4
}

console.log(fruitApple.name);
console.log(fruitApple);

class Fruit {
  constructor(initName, initPrice, initQuantity) {
    this.name = initName;
    this.price = initPrice;
    this.count = initQuantity;
  }

  whatAmI() {
    console.log(`I am, ${this.name}`);
  }

  totalCost() {
    console.log(this.price * this.count);
  }
}

const instanceOfFruit = new Fruit('orange', 0.50, 2);
const appleInstance = new Fruit('apple', 0.35, 6);

console.log(Fruit);
console.log(instanceOfFruit);
console.log(instanceOfFruit.price);
console.log(appleInstance);

class Person {
  constructor(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.message = () => {
      console.log('message:', this);
    }
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  message = () => {

  }
}

class Student extends Person {
  constructor(fName, lName, age, graduationDate) {
    super(fName, lName, age);
    this.graduationDate = graduationDate;
  }


}

const instructor = new Person('Myron', 'Schippers', 37);
console.log(instructor);
const student = new Student('Shelby', 'Cook', 26, '1/1/2023');
console.log(student);
const student2 = new Student('David', 'Walton', 30, '1/1/2023');
console.log(student2);