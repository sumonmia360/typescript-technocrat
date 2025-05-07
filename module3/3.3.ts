{
  // type gurad keyop gurdnd
  type AquarecyType = string | number;

  const aquarateTypeCheck = (param1: AquarecyType, param2: AquarecyType) => {
    if (typeof param1 == "number" && typeof param2 == "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  console.log(aquarateTypeCheck(32, 55));

  // in gurds very

  type Obj1 = {
    name: string;
    age: number;
  };
  type Obj2 = {
    role: "admin";
  };
  type NewGurds = Obj1 & Obj2;
  const inGurdsCheck = (user: NewGurds) => {
    if ("role" in user) {
      return `yes he is a batter then gurds`;
    }
  };
  console.log(inGurdsCheck({ name: "sonjou", age: 4, role: "admin" }));

  //
}
