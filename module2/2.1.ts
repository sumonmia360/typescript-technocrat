{
  // assertion

  let anyting: any;
  anyting = "sumon";

  (anyting as string).length;

  let isAdmin: any;
  isAdmin = true;
  isAdmin as boolean;

  const getKgToGram = (input: string | number) => {
    if (typeof input == "string") {
      console.log(input);
      const numberMake = parseFloat(input) * 1000;
      return `this is string ${numberMake}`;
    }
    if (typeof input == "number") {
      const grams = input * 1000;
      return grams;
    }
  };

  //   const check = getKgToGram(10);
  const check2 = getKgToGram(10) as number;
  console.log(check2);

  type strMsg = {
    massage: string;
  };

  try {
  } catch (error) {
    console.log((error as strMsg).massage);
  }
  ///
}
