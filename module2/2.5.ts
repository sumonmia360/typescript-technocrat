{
  // functin with generics

  const getGenerics1 = <T>(parem: T): T[] => {
    return [parem];
  };

  const checkIt = getGenerics1<string>("string");
  const checkIt1 = getGenerics1<number>(232);

  const checkIt2 = getGenerics1<boolean>(true);

  const getGenerics = <T>(parem: T): T => {
    return parem;
  };

  interface User {
    name: string;
    age: number;
  }
  const newCheck = getGenerics<User>({
    name: "sumon",
    age: 23,
  });

  const getGenericsTuple = <T, X>(parm: T, parm1: X): [T, X] => {
    return [parm, parm1];
  };

  const tupleCheck = getGenericsTuple<string, number>("sumon", 45);
  interface Fullstack {
    frontend: string;
    backend: string;
  }
  const tupleCheck1 = getGenericsTuple<boolean, Fullstack>(true, {
    frontend: "yes",
    backend: "now",
  });
}
