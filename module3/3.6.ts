{
  //

  class BackAount {
    constructor(
      readonly id: number,
      name: string,
      protected _balance: number
    ) {}

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    get balance() {
      return this._balance;
    }
  }

  class SumonMia extends BackAount {
    test() {
      this._balance;
    }
  }

  const sumonMia = new BackAount(232, "Muhammad Sumon", 500);
  sumonMia.deposit = 454;
  console.log(sumonMia.balance);

  //
}
