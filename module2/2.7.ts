{
  /// keyof constrainsts
  type vichale = "car" | "bike" | "ship";

  type vichale1 = {
    car: string;
    bike: string;
    ship: string;
  };

  type Ower1 = keyof vichale1;
  type Ower = keyof vichale;

  const sumon: Ower1 = "bike";

  const User = {
    name: "sumon",
    age: 21,
    skill: "webdev",
  };

  const getKeyValue = User.name;
  const getKeyValue1 = User["name"];

  const getKeyValueByFn = <Y, X extends keyof Y>(obj: Y, key: X) => {
    return obj[key];
  };
  const User1 = {
    name: "sumon",
    age: 21,
    skill: "webdev",
  };
  const getValueByFn = getKeyValueByFn(User1, "name");
}
