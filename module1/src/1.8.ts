{
  //Destructuring in Object and Array

  const webframework = {
    fist: "vuejs",
    secound: "reactjs",
    third: {
      third1: "nextjs",
      third2: "nuxtjs",
      third3: "astrojs",
    },
  };

  const {
    fist: last,
    secound: again,
    third: { third1, third2 },
  } = webframework;

  const webLanguage: string[] = ["js", "ts", "rust", "python", "java"];

  const [a, , , ...pyJv] = webLanguage;
  const webStack: string[] = [
    "marn",
    "jangodb",
    "javadeveloper",
    "rust developr",
  ];

  const [rusdeveloper, , js, ...withOutRust] = webStack;
}
