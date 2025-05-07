{
  // calss oop
  class Animal {
    //modifaier
    public name: string;
    public jat: string;
    public age: number;
    // parameter property
    constructor(name: string, jat: string, age: number) {
      (this.name = name), (this.jat = jat), (this.age = age);
    }
    testFN() {
      return `this the animal is :${this.name} and age:${this.age},also ${this.jat}`;
    }
  }

  const dog = new Animal("kukur", "bangla", 87);
  const cat = new Animal("biral", "deshi", 5);
  //   console.log(dog.age, cat.jat, dog.testFN());

  // class with parameter propariters
  class Car {
    constructor(
      public name: string,
      public company: string,
      public hoursePower: number
    ) {}

    carBenifites() {
      return ` lord of benifites in the  and this the name:${this.company},also${this.name},also${this.hoursePower}`;
    }
  }
  const maruti = new Car("MarutiCar", "indianCompany", 1200);
  const cvr = new Car("Cvr85", "japaniCompany", 1020);
  //   console.log(cvr.company, maruti.hoursePower, maruti.carBenifites());

  class Student {
    constructor(
      public name: string,
      public roll: number,
      public section: string
    ) {}
    studentFN() {
      return `This student details is : name:${this.name} , Roll:${this.roll},Seecton:${this.section}`;
    }
  }

  const monir = new Student("Muhammad Monir", 55, "play");
  const raju12 = new Student("Raju ahmed", 88, "narsari");
  //   console.log(monir.name, monir.studentFN());
}
