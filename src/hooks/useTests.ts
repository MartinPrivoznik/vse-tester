import { useRouter } from "next/navigation";
import { useState } from "react";

import { processFile } from "../actions/fileLoader";
import Test from "../models/Test";

export default function useTests() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const uploadTest = async (
    name: string,
    multipleChoice: boolean,
    file: File,
  ) => {
    setLoading(true);
    const res = await processFile(name, multipleChoice, file);

    if (!res.success || !res.data) {
      setLoading(false);
      alert(res.message ?? "Chyba při nahrávání testu");
      throw new Error(res.message ?? "Chyba při nahrávání testu");
    }

    saveTestToLocalStorage(res.data);

    setLoading(false);
    router.push("/my-work");
  };

  const saveTestToLocalStorage = (test: Test) => {
    localStorage.setItem("test", JSON.stringify(test));
  };

  return {
    loading,
    uploadTest,
  };
}
