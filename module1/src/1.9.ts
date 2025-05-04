{
  //type Alias

  type Student = {
    name: string;
    class: number;
    age: number;
    address: string;
    isMarrd?: boolean;
  };

  const student1: Student = {
    name: "sumon",
    class: 16,
    age: 24,
    address: "dht",
    isMarrd: false,
  };

  const student2: Student = {
    name: "rony",
    class: 13,
    age: 22,
    address: "fdp",
  };

  type IsAdmin = boolean;
  type Username = string;

  const name: Username = "sumon";
  const isAdmin: IsAdmin = true;

  /// functional type alias
  type VsCode = (ememt1: string, ememt2: string, ement3: string) => string[];

  const vsCode: VsCode = (extension, compailar) => {
    return [extension, compailar];
  };
}
