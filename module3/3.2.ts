{
  // inheritence

  class Person {
    name: string;
    role: string;
    address: string;
    constructor(name: string, role: string, address: string) {
      (this.name = name), (this.role = role), (this.address = address);
    }
    getSleep(sleepHour: number) {
      console.log(
        `Mr.${this.name} Sleep ${sleepHour} Hour in Day and his address:${this.address}`
      );
    }
  }
  class Student extends Person {
    constructor(name: string, role: string, address: string) {
      super(name, role, address);
    }
  }

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      role: string,
      address: string,
      designation: string
    ) {
      super(name, role, address), (this.designation = designation);
    }
    teacherFn(workHoure: number) {
      return `this teacher working hour is ${workHoure}`;
    }
  }
  const teacher1 = new Teacher(
    "Abu Salahe",
    "Teacher",
    "chattrogram",
    "professor"
  );
  const student2 = new Student("sumon", "boss", "Dhaka");
  console.log(student2.address, teacher1.teacherFn(5));

  /////////////
}
