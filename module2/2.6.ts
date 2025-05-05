{
  // constraints

  interface Student {
    name: string;
    id: number;
    email?: string;
  }

  const addStudent = <T extends Student>(student: T): T => {
    const course = "next level web course";

    return {
      ...student,
      course,
    };
  };

  const student1 = addStudent({
    name: "sumon",
    id: 1,
    email: "sumonmia@dev.com",
    contactNo: 1884874359,
  });

  //
}
