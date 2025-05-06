{
  /// uitily types

  //pick type
  type House = {
    table: string;
    chair: string;
    desintable: string;
    membar?: number;
  };
  type Table = Pick<House, "table" | "membar">;

  type ChairDesintable = Pick<House, "chair" | "desintable">;
  //omit means bad deya
  type Membar = Omit<House, "membar" | "chair">;
  type Table1 = Omit<House, "table">;

  // Required

  type AllRequired = Required<House>;
  //partial
  type Allpartial = Partial<House>;

  // Readonly
  type AllReadonly = Readonly<House>;

  // Record

  type RecordCheck = {
    a: string;
    b: string;
  };
  type RecordType = Record<string, string>;

  const recordList: RecordType = {
    a: "sumon",
    b: "mia",
    c: "muhammad",
    d: "sumonmia",
    emon: "miaemon",
  };
  const emtyObj: Record<string, unknown> = {
    sumon: "sm",
    mia: 54,
    car: true,
  };
  ///
}
