{
  /// interface whit generics

  interface Developer<T> {
    name: string;
    skill: string;
    computer: T;
  }

  interface Computer {
    model: string;
    ram: number;
  }

  const developer: Developer<Computer> = {
    name: "sumon",
    skill: "fullstackDeveloper",
    computer: {
      model: "asus",
      ram: 8,
    },
  };

  interface Country<T> {
    name: string;
    disctricNo: number;
    capital: string;
    indipentend?: T;
  }
  interface pak {
    win: boolean;
    winSice: number;
  }

  const bangladesh: Country<pak> = {
    name: "bangladesh",
    disctricNo: 64,
    capital: "Dhaka",
    indipentend: {
      win: true,
      winSice: 1971,
    },
  };

  interface University<T> {
    name: string;
    campus: string;
    student: number;
    quality: T;
  }
  interface Quality {
    teacher: string;
    acInvertor: boolean;
    bus?: number;
  }

  const DU: University<Quality> = {
    name: "DhakaUniversity",
    campus: "shahbag",
    student: 21335,
    quality: {
      teacher: "loads",
      acInvertor: true,
      bus: 25,
    },
  };
  interface Quality1 {
    teacher: string;
    acInvertor: boolean;
  }
  const PU: University<Quality1> = {
    name: "PresindencyUniversity",
    campus: "gulshan",
    student: 2000,
    quality: {
      teacher: "loads",
      acInvertor: true,
    },
  };
}
