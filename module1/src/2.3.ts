{
  // generics

  //array generalaize
  const frontend: Array<string> = ["html", "css", "tailwind", "js", "ts"];
  const school: Array<number> = [1, 3, 4, 3, 1];
  const isMarred: Array<boolean> = [true, false, true];
  // Daynamic generics
  type GenericsAry = Array<boolean>;
  type GenericsAry1<T> = Array<T>;

  const frontend1: Array<string> = ["html", "css", "tailwind", "js", "ts"];
  const school1: GenericsAry1<number> = [1, 3, 4, 3, 1];
  const isMarred1: GenericsAry = [true, false, true];

  // Object of generics
  const Saif: GenericsAry1<{ name: "sumon"; age: number; contact: number }> = [
    {
      name: "sumon",
      age: 5,
      contact: 12345,
    },
    {
      name: "sumon",
      age: 10,
      contact: 12345,
    },
    {
      name: "sumon",
      age: 10,
      contact: 12345,
    },
  ];

  // tuple of generics
  type GenericsTuple<X, Y, Z> = [X, Y, Z];

  const sumon: [string, string, boolean] = ["Mr. x", "Mr. y", true];
  const sumon1: GenericsTuple<string, string, boolean> = [
    "Mr. x",
    "Mr. y",
    true,
  ];
}
