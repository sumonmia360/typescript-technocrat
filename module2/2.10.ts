{
  // mapped type
  const ary: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const newAry: string[] = ary.map((number) => number.toString());

  const example2 = ary[1];
  console.log(example2);

  type Area = {
    hight: number;
    widthe: number;
    space: number;
  };

  type example1 = {
    [key in keyof Area]: number;
  };

  type Area2 = {
    hight: string;
    widthe: number;
    space: number;
  };

  type checkIt = Area2["hight"]; //-- look up

  type example3<T> = {
    [key in keyof T]: T[key];
  };

  const mappedCheckByFn: example3<{
    sumon: string;
    age: number;
    skill: string;
  }> = {
    sumon: "sumon",
    age: 45,
    skill: "webdev",
  };
}
