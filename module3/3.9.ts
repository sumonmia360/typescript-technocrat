{
  /// abstraction -1.interface 2. abstraction
  // interface

  interface Vechile {
    getEngine(): void;
    powerOfCar(): void;
    move(): void;
  }

  class Car implements Vechile {
    getEngine(): void {
      console.log("the is get 2000 kg wetght");
    }
    powerOfCar(): void {
      console.log("The car war first in the race ");
    }
    move(): void {
      console.log("the car was move very quickly in the road");
    }
    test() {
      console.log("it is a test functon");
    }
  }

  const car = new Car();
  //   car.getEngine();
  //   car.move();
  //   car.powerOfCar();

  // abstract example of abstraction
  abstract class Vechile2 {
    abstract getEngine(): void;
    abstract powerOfCar(): void;
    abstract move(): void;
    test() {
      console.log("bangladeshi car");
    }
  }

  class Car3 extends Vechile2 {
    getEngine(): void {
      console.log("Hello getEngine Power by  abstract");
    }
    powerOfCar(): void {
      console.log("gets power from abstract for car");
    }
    move(): void {
      console.log("move move for the car and also abstraction");
    }
  }

  const carr = new Car3();
  console.log(carr.getEngine());
  carr.getEngine();

  ///
}
