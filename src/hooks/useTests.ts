import { useEffect, useState } from "react";

import { processFile } from "../actions/fileLoader";
import Test from "../models/Test";

const localStoragePrefix = "test-";

export default function useTests() {
  const [tests, setTests] = useState<Test[] | null>();
  const [uploadLoading, setUploadLoading] = useState(false);

  useEffect(() => {
    setTests(getTests());
  }, []);

  const getTests = (): Test[] => {
    const keys = Object.keys(localStorage).filter((key) =>
      key.startsWith(localStoragePrefix),
    );

    return keys.map((key) => {
      const test = localStorage.getItem(key);

      if (!test) {
        return null;
      }

      return JSON.parse(test);
    });
  };

  const deleteTest = (id: string) => {
    if (confirm("Opravdu chcete smazat tento test?")) {
      localStorage.removeItem(localStoragePrefix + id);
      setTests(getTests());
    }
  };

  const refreshTests = () => {
    setTests(getTests());
  };

  const uploadTest = async (
    name: string,
    multipleChoice: boolean,
    file: File,
  ) => {
    setUploadLoading(true);
    const res = await processFile(name, multipleChoice, file);

    if (!res.success || !res.data) {
      setUploadLoading(false);
      alert(res.message ?? "Chyba při nahrávání testu");
      throw new Error(res.message ?? "Chyba při nahrávání testu");
    }

    saveTestToLocalStorage(res.data);
    setUploadLoading(false);
  };

  const saveTestToLocalStorage = (test: Test) => {
    localStorage.setItem(localStoragePrefix + test.id, JSON.stringify(test));
  };

  return {
    tests,
    deleteTest,
    refreshTests,
    uploadLoading,
    uploadTest,
  };
}
