import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

import Test, { Question } from "../models/Test";
import { shuffle } from "../helpers/arrayHelpers";

const localStoragePrefix = "test-";

export default function useTest(id: string) {
  const [test, setTest] = useState<Test>();
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [questionCount, setQuestionCount] = useState<number>(0);

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
    const test = getTestById(id);

    setTest(test);
    setQuestionCount(test.questions.length);
  }, []);

  const processToNextQuestion = () => {
    if (!test || !currentQuestion) {
      return;
    }

    const currentQuestionIndex = test.questions.indexOf(currentQuestion);

    if (currentQuestionIndex === test.questions.length - 1) {
      return;
    }

    const nextQuestion = test.questions[currentQuestionIndex + 1];

    nextQuestion.seen = true;
    shuffle(nextQuestion.answers);

    setCurrentQuestion(nextQuestion);
    syncTestWithStorage(test);
  };

  const processToRandomQuestion = () => {
    if (!test) {
      return;
    }

    let questionsToChooseFrom = test.questions.filter((q) => !q.seen);

    if (!questionsToChooseFrom.length) {
      questionsToChooseFrom = test.questions;
    }

    const randomQuestion =
      questionsToChooseFrom[
        Math.floor(Math.random() * questionsToChooseFrom.length)
      ];

    randomQuestion.seen = true;
    shuffle(randomQuestion.answers);

    setCurrentQuestion(randomQuestion);
    syncTestWithStorage(test);
  };

  return {
    test,
    currentQuestion,
    questionCount,
    processToNextQuestion,
    processToRandomQuestion,
  };
}
