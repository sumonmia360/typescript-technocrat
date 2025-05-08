{
  //
  {
    //access modifiers

    class BackAount {
      readonly id: number;
      protected name: string;
      protected _balance: number;
      constructor(id: number, name: string, _balance: number) {
        (this.id = id), (this.name = name), (this._balance = _balance);
      }
      public addDeposite(amount: number) {
        return (this._balance = this._balance + amount);
      }
      get balanceCheck1() {
        return this._balance;
      }
      set deposit(amount: number) {
        this._balance = this._balance + amount;
      }
      private balanceCheck() {
        return this._balance;
      }
      getBalanceCheck() {
        return this.balanceCheck();
      }
    }
    const sumonMia = new BackAount(232, "sumonmia360", 30);

    class sumon1 extends BackAount {
      //   protected name: string;

      test() {
        this._balance;
        this.name;
      }
    }

    sumonMia.addDeposite(55);

    console.log(sumonMia.getBalanceCheck());
    //
  }

  //
}
