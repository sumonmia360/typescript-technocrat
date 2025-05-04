{
  // interface

  //   type Add = number;

  //   const jog: Add = 64;
  //   interface Add2 {

  //   }

  // je interface type diye primitve type bojha no jai na

  //type alias
  type Sumon = {
    name: string;
    age: number;
  };

  const sumon: Sumon = {
    name: "sumon",
    age: 23,
  };
  // interface
  interface Sumon1 {
    name: string;
    age: number;
  }

  const sumon1: Sumon1 = {
    name: "sumon",
    age: 23,
  };

  // type alias array
  type Ary = number[];

  const ary: Ary = [1, 2, 3, 4];

  // interface in array
  interface Ary1 {
    [index: number]: number;
  }
  const ary1: Ary1 = [1, 2, 3, 4, 5];

  type Emon = {
    contactNo: 255;
    home: "Dhaka";
  };

  type EmonMia = Emon & { house?: string };
  const emon: EmonMia = {
    contactNo: 255,
    home: "Dhaka",
  };

  interface Emon1 {
    contactNo: number;
    class: boolean;
  }

  interface NewEmon extends Emon1 {
    bookName: "valoboi";
    age: 23;
  }

  interface NewEmon1 extends NewEmon {
    intarnational: string;
    hight?: 23;
  }

  const newEmonMia: NewEmon1 = {
    contactNo: 2323,
    class: true,
    bookName: "valoboi",
    age: 23,
    intarnational: "sumon",
  };

  //
}
