{
  //asynchronous typescript
  type jsonType = {
    userId: number;
    id: number;
    title: string;
    comleted: boolean;
  };

  const jsonFetch = async (): Promise<jsonType> => {
    const getData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const newData: jsonType = await getData.json();
    return newData;
  };

  const dataForm = jsonFetch();
  type obj = {
    Bangladehs: string;
  };
  const customPro = (): Promise<obj> => {
    return new Promise<obj>((resolve, reject) => {
      let testPro: obj = { Bangladehs: "yes" };
      if (testPro) {
        resolve({ Bangladehs: "yes" });
      } else {
        reject("sumon sorry");
      }
    });
  };

  const callThePro = async (): Promise<obj> => {
    const data: obj = await customPro();
    return data;
  };

  const checkFn = callThePro();
}
