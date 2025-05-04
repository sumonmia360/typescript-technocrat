{
  // Deffarent types of ? mark symbol using use case
  // tarnary operator
  // optional type,
  // optional chaning,
  // nullish coalescing

  //tarnary operator//
  const age: number = 24;
  //   if (age >= 30) {
  //     console.log("youger");
  //   } else {
  //     console.log("middelAger");
  //   }
  const check = age <= 30 ? "yes he is younger" : "he is a middleager";
  //   console.log(check);
  const amiParboInshallah: boolean = true;
  const yesOrNot =
    amiParboInshallah == true
      ? "Dinder and taqwader with engneerar"
      : "dinder and taqwa but not developer";
  //   console.log(yesOrNot);

  // nullish coalescing
  const isAuthontication = null;
  const isAuthCheck = isAuthontication ?? "he is a gust";

  //   console.log(isAuthCheck);

  const SumonAuthChecking = undefined;
  const SumonAuthChecking1 = "";
  const isCheckPlease =
    SumonAuthChecking ?? "this hes is not sumon that's why is it";
  console.log(isCheckPlease);

  const checkIt = SumonAuthChecking1 == "" ? "sumon hi" : "sorry";
  console.log(checkIt);

  type Student = {
    name: string;
    age: number;
    class: number;
    address?: string;
    contactNo: {
      baba?: number;
      self: {
        no1: number;
        no2?: number;
      };
    };
  };

  const monir: Student = {
    name: "monir",
    age: 22,
    class: 14,
    contactNo: {
      baba: 1884874359,
      self: {
        no1: 121115211,
      },
    },
  };

  const monir2No =
    monir?.contactNo?.self?.no2 ?? "oh he have not secound number";
  console.log({ monir2No });
}
