{
  //conditional type

  type a1 = null;
  type b1 = undefined;

  type c1 = a1 extends b1 ? true : any;
  type d1 = c1 extends true ? string : a1 extends undefined ? true : number;

  interface vechile {
    car: string;
    bile: string;
    ship: string;
  }

  type checkT<T> = T extends keyof vechile ? string : any;
  type herBike = checkT<"car">;
}
