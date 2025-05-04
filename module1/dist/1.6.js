"use strict";
// Learing function in typesctript
// Normal fucnction
// arrow function
{
    function add(a, b) {
        return a + b;
    }
    const poorType = {
        sumon: "mia",
        class: 12,
    };
    add(45, 63);
    const square = (a, b) => a * b;
    square(6, 7);
    // how use method in object
    const bangladesh = {
        name: "ALEM",
        color: "black",
        exprerience: 6,
        realExprence(exprerience) {
            return `sumonmia ${this.exprerience * 5}`;
        },
    };
    // callback function
    const monir = [564, 565, 45, 64];
    const newMonir = monir.map((elemt) => elemt * 2);
}
