// Learing function in typesctript
// Normal fucnction
// arrow function
{
  function add(a: number, b: number): number {
    return a + b;
  }

  const poorType = {
    sumon: "mia",
    class: 12,
  };

  add(45, 63);

  const square = (a: number, b: number): number => a * b;

  square(6, 7);

  // how use method in object
  const bangladesh = {
    name: "ALEM",
    color: "black",
    exprerience: 6,
    realExprence(exprerience: number): string {
      return `sumonmia ${this.exprerience * 5}`;
    },
  };

  // callback function

  const monir: number[] = [564, 565, 45, 64];
  const newMonir: number[] = monir.map((elemt: number): number => elemt * 2);
}
