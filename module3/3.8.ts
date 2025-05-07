{
  //Polymorphism

  class Person {
    getSleep() {
      return "the ganaral man sleep 8 hour in a day";
    }
  }

  class Student extends Person {
    getSleep() {
      return "the Student are sleep 7 hour in a day";
    }
  }

  class Developer extends Person {
    getSleep() {
      return "the ganaral man sleep 6 hour in a day";
    }
  }
  const getSleepHour = (param: Person) => {
    return param.getSleep();
  };
  const ganaralMan = new Person();
  const student = new Student();
  const develpoer = new Developer();
  const checkTheSleepHour = getSleepHour(ganaralMan);
  console.log(checkTheSleepHour);

  class Shape {
    getArea() {
      return 0;
    }
  }

  // pi*r*r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  // hight * width

  class Rectangle extends Shape {
    hight: number;
    width: number;
    constructor(hight: number, width: number) {
      super();
      (this.hight = hight), (this.width = width);
    }
    getArea(): number {
      return this.hight * this.width;
    }
  }

  const circle = new Circle(10);
  const rectangle = new Rectangle(10, 20);

  const checkingShape = (param: Shape) => {
    return param.getArea();
  };

  const checkTheShapeSize = checkingShape(circle);
  console.log(checkTheShapeSize);
  // console.log("bang");

  //
}
