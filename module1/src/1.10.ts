{
  // union type like or |
  // intersection type like and &

  type FrontendDeveloper = "timewastDeveloper" | "bestDeveloper";

  const sumon: FrontendDeveloper = "timewastDeveloper";
  const nowSumon: FrontendDeveloper = "bestDeveloper";

  type User = {
    Name: string;
    age: 23 | 24;
    job?: "jobLess" | "jobHolder";
  };

  const sumon1: User = {
    Name: "sumonmia",
    age: 24,
  };

  const shihab: User = {
    Name: "shihav",
    age: 23,
    job: "jobHolder",
  };

  //intersection type

  type Frontend = {
    skill: string[];
    designation1: "frontendDeveloper";
    role?: "sr";
  };
  type Backend = {
    skill: string[];
    designation2: "backendDeveloper";
  };

  type FullstackDeveloper = Frontend & Backend;

  const sumonmia: FullstackDeveloper = {
    skill: ["HTML", "CSS", "JS", "TS", "MONOGODB", "EXPRESS"],
    designation1: "frontendDeveloper",
    designation2: "backendDeveloper",
  };
}
