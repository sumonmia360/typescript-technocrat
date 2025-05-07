{
  ////// instenceof guards

  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    makeSound() {
      return ` hi im barking`;
    }
  }
  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
    dogSound() {
      return `I am ${this.name} my Sound:is Braking braking `;
    }
  }

  class Cat extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
    catSound() {
      return `I am ${this.name} my Sound:is Meaw meaw `;
    }
  }

  const dog = new Dog("shefard", 15);
  const cat = new Cat("bilati", 5);

  // advace level and smart way handle the instanceof
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      return animal.dogSound();
    } else if (isCat(animal)) {
      return animal.catSound();
    }
  };

  //   console.log(cat.age);
  const checkAnimal = getAnimal(cat);
  console.log(checkAnimal);

  //////
}
