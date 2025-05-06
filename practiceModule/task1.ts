{
  // task1
  const helloTypecript: string =
    "Hello World, I will complete this course successfully and become a Next level Web Developer";
  //   console.log(helloTypecript);

  //task2

  const checkAdmin = (
    name: string,
    age: number,
    role?: "admin" | "user" | "gust"
  ): {} => {
    const isAdminCheck = {
      admin: name,
      adminAge: age,
      adminRole: role,
    };
    return isAdminCheck;
  };
  const checkAdminNow = checkAdmin("sumon", 54, "admin");
  //   console.log(checkAdminNow);

  // task -3
  type Person = {
    Name: string;
    Address: string;
    HairColor: string;
    EyeColor: string;
    Income: number;
    Expense: number;
    Hobbies: string;
    FamilyMembers: number;
    Job: boolean;
    Skill: string;
    MaritalStatus: boolean;
    Friends: boolean;
  };

  // task 4

  interface Book {
    athor: string;
    publisDate: number;
    bookName: string;
  }
  interface Megazine {
    reliseYear: number;
    exist: boolean;
  }

  type CategoryCheck = Book | Megazine;
  type CategoryCheck1 = Book & Megazine;
  const book: CategoryCheck = {
    athor: "sumon",
    publisDate: 121,
    bookName: "everyTelentYou",
  };
  const bookMagazine: CategoryCheck1 = {
    athor: "sumon",
    publisDate: 121,
    bookName: "everyTelentYou",
    reliseYear: 2023,
    exist: false,
  };

  // task-5

  const reverseString = (value: string): string => {
    const newAry: string[] = [];
    for (let i = 0; i < value.length; i++) {
      const newAry1: number = newAry.push(value[i]);
    }
    const newMake: string = newAry.reverse().join("");
    return newMake;
  };
  const reverseIt: string = reverseString("hello");
  // console.log(reverseIt);
  //task-6

  const sumOfAll = (...numeric: number[]): number => {
    let sum: number = 1;
    let sumAll = numeric.forEach((num) => {
      sum = sum + num;
    });
    return sum;
  };
  const allSumIt = sumOfAll(41, 55, 45, 65, 78, 5);
  // console.log(allSumIt);
  type LengthOrSquare = string | number;
  //task7
  const assertionCheck = (value1: LengthOrSquare): number => {
    let returnValue: number = 0;
    if (typeof value1 == "number") {
      const makeSquare = value1 * 2;
      returnValue = makeSquare;
    }
    if (typeof value1 == "string") {
      const getLenght = value1.length;
      returnValue = getLenght;
    }
    return returnValue;
  };

  const lengthOrSquare = assertionCheck("666") as number;
  // console.log(lengthOrSquare);

  // task8
  type User = {
    name: string;
    email: string;
  };
  type Admin = {
    adminLevel: true;
  };

  type AdminUser = User & Admin;
  const describeAdmin = (user: AdminUser): string => {
    const { name, email, adminLevel } = user;
    return `his admin is ${adminLevel} and his name is ${name} and his is email:${email}`;
  };
  interface AdminDetails {
    name: string;
    email: string;
    adminLevel: boolean;
  }
  const checkAdmin1: string = describeAdmin({
    name: "sumon",
    email: "sumonmia.dev@gmail.com",
    adminLevel: true,
  }) as string;

  // console.log(checkAdmin1);

  // task 9

  type EmlopyeeType = {
    name: string;
    age: number;
    company: {
      designation?: string;
      depertment: string;
      workCompleted: number;
      city?: string;
    };
  };
  const getEmployeeCity = (employee: EmlopyeeType) => {
    const city = employee?.company?.city;
    return city;
  };
  const emlopyeeDetails: EmlopyeeType = {
    name: "sumon",
    age: 23,
    company: {
      designation: "webdev",
      depertment: "it",
      workCompleted: 20,
    },
  };
  const employeeCity = getEmployeeCity(emlopyeeDetails);
  // console.log(employeeCity);

  // task10
  const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous";
  };

  // console.log(getDisplayName(undefined));

  //task11

  const processData = (data: unknown) => {
    if (typeof data == "string") {
      return data.toUpperCase();
    } else if (typeof data == "number") {
      return data * 2;
    }
  };
  const unknownDataCheck = processData("bangladesh");
  // console.log(unknownDataCheck);

  //task-12
  type Sumon = {
    name: string;
    age: number;
  };

  const asynFn = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user: Sumon = {
          name: "sumon",
          age: 454,
        };
        resolve(user);
      }, 2000);
    });
  };

  // asynFn().then((user) => {
  //   console.log(user);
  // });

  //task-15
  const printUpperCase = (value: unknown) => {
    if (typeof value == "string") {
      const testConst = value.toUpperCase();
      return testConst;
    }
  };
  const isString = (value: unknown) => {
    if (typeof value == "string") {
      return printUpperCase(value);
    }
  };

  const checkValue2 = isString("sumon") as string;
  // console.log(checkValue2);

  // task-16
  type KeyopfType = {
    car: string;
    bike: string;
    ship: string;
  };
  const ower = {
    car: "TaTa",
    bike: "yamaha",
    ship: "bolt",
  };
  const keyofTest = <T, Y extends keyof T>(obj: T, key: Y) => {
    return obj[key];
  };

  const sendValue = keyofTest(ower, "car");
  console.log(sendValue);
  /////////////////////////
}
