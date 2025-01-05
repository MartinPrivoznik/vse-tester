import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

import Test from "../models/Test";

const localStoragePrefix = "test-";

export default function useTest(id: string) {
  const [test, setTest] = useState<Test>();

  const getTestById = (id: string): Test => {
    const testJson = localStorage.getItem(localStoragePrefix + id);

    if (!testJson) {
      notFound();
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
