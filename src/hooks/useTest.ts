import { useEffect, useState } from "react";

import Test from "../models/Test";

const localStoragePrefix = "test-";

export default function useTest(id: string) {
  const [test, setTest] = useState<Test>();

  const getTestById = (id: string): Test => {
    const testJson = localStorage.getItem(localStoragePrefix + id);

    if (!testJson) {
      throw new Error("Test not found");
    }

    return JSON.parse(testJson);
  };

  useEffect(() => {
    setTest(getTestById(id));
  }, []);

  return {
    test,
  };
}
