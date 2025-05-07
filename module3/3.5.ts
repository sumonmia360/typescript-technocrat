{
  //access modifiers

  class BackAount {
    readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      (this.id = id), (this.name = name), (this._balance = _balance);
    }
    public addDeposite(amount: number) {
      return (this._balance = this._balance + amount);
    }

    public balanceCheck() {
      return this._balance;
    }
  }
  const sumonMia = new BackAount(232, "sumonmia360", 30);

  class sumon1 extends BackAount {
    test() {
      this._balance;
    }
  }

  sumonMia.addDeposite(55);

  console.log(sumonMia.balanceCheck());
  //
}
