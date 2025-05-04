{
  // nullabel type
  // unknown type
  // never type

  /// nullable type
  const searchItem = (value: string) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("this is no searching able");
    }
  };

  // searchItem(null);

  // never type

  const neverType = "yes this a error types msg";

  const neveTypeTest = (value: string): never => {
    throw new Error(value);
  };
  // neveTypeTest(neverType);

  // Unknown type

  const getSpeedInMeterPerSecound = (value: unknown) => {
    if (typeof value == "number") {
      const result1 = (value * 100) / 3600;
      console.log(`the result ${result1} mr^1`);
    } else if (typeof value == "string") {
      const [value1, unit] = value.split(" ");
      const newValue = (parseFloat(value1) * 1000) / 3600;
      console.log(`this is the new value ${newValue} ${unit}`);
    }
  };

  getSpeedInMeterPerSecound("1000 mr^1");
}
