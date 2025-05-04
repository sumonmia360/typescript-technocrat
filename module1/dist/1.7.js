"use strict";
// spreed oparetor
// rest operator
{
    let fist = ["html", "css", "js", "rect js"];
    let secound = ["typescript", "redux", "next js", "mogosce"];
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
    const sumonPlus = Object.assign(Object.assign({}, sumon1), sumon2);
    //rest operator..
    function oop(...sumonSkills) {
        sumonSkills.forEach((skill) => console.log(`hi skills ${skill}`));
    }
    oop("emcapsulation", "inheritece", "polymerphisem");
    //
}
