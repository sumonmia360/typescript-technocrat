//Refarence data types

const user: {
  readonly company: string; //literal type
  sumonmia: string;
  age?: number;
  isMerried: boolean;
} = {
  company: "ph-company",
  sumonmia: "sumon",
  isMerried: false,
};

// user.company = "ph-companysumon";

user.age = 23; //optional property
