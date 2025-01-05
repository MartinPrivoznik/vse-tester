import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

import Test, { Question } from "../models/Test";
import { shuffle } from "../helpers/arrayHelpers";

const localStoragePrefix = "test-";

export default function useTest(id: string) {
  const [test, setTest] = useState<Test>();
  const [currentQuestion, setCurrentQuestion] = useState<Question>();

  const syncTestWithStorage = (test: Test) => {
    localStorage.setItem(localStoragePrefix + test.id, JSON.stringify(test));
  };

  const preprocessTest = (test: Test): Test => {
    test.questions.forEach((question) => {
      shuffle(question.answers);
    });

    test.questions[0].seen = true;
    setCurrentQuestion(test.questions[0]);

    return test;
  };

  const getTestById = (id: string): Test => {
    const testJson = localStorage.getItem(localStoragePrefix + id);

    if (!testJson) {
      notFound();
    }

    const test = preprocessTest(JSON.parse(testJson) as Test);

    syncTestWithStorage(test);

    return test;
  };

  useEffect(() => {
    setTest(getTestById(id));
  }, []);

  return {
    test,
    currentQuestion,
  };
}
