// spreed oparetor
// rest operator
{
  let fist: string[] = ["html", "css", "js", "rect js"];
  let secound: string[] = ["typescript", "redux", "next js", "mogosce"];

  fist.push(...secound);
  const sumon1 = {
    html: "yes",
    js: "yes",
    css: "very yes",
    rectjs: "nice yes ",
  };

  const sumon2 = {
    nextjs: "expart",
    redux: "expart",
    oop: "best expart",
    mvc: "very easy",
  };

  const sumonPlus = {
    ...sumon1,
    ...sumon2,
  };

  //rest operator..
  function oop(...sumonSkills: string[]) {
    sumonSkills.forEach((skill: string) => console.log(`hi skills ${skill}`));
  }

  oop("emcapsulation", "inheritece", "polymerphisem");
  //
}
