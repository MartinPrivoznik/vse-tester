import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

import Test, { Question } from "../models/Test";
import { shuffle } from "../helpers/arrayHelpers";

const localStoragePrefix = "test-";

export default function useTest(id: string) {
  const [test, setTest] = useState<Test>();
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentQuestionAnswered, setCurrentQuestionAnswered] =
    useState<boolean>(false);
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

  const changeQuestion = (question: Question) => {
    setCurrentQuestion(question);
    setCurrentQuestionAnswered(false);
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

    changeQuestion(nextQuestion);
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

    changeQuestion(randomQuestion);
    syncTestWithStorage(test);
  };

  const processToQuestion = (questionIndex: number) => {
    if (!test) {
      return;
    }

    const question = test.questions[questionIndex];

    question.seen = true;
    shuffle(question.answers);

    changeQuestion(question);

    syncTestWithStorage(test);
  };

  const resetTest = () => {
    const test = getTestById(id);

    test.questions.forEach((question) => {
      question.seen = false;
      question.success = undefined;
    });

    setTest(test);
    setQuestionCount(test.questions.length);
    setCurrentQuestionAnswered(false);
    syncTestWithStorage(test);
  };

  const validateAnswers = (selectedAnswers: Array<number>) => {
    if (!test || !currentQuestion) {
      return;
    }

    const currentQuestionIndex = test.questions.indexOf(currentQuestion);
    let question = test.questions[currentQuestionIndex];

    const correctAnswers = currentQuestion.answers
      .filter((answer) => answer.isCorrect)
      .map((answer) => answer.id);

    const success =
      correctAnswers.length === selectedAnswers.length &&
      correctAnswers.every((answer) => selectedAnswers.includes(answer));

    question.success = success;

    setCurrentQuestionAnswered(true);
    setCurrentQuestion(question);
    setTest(test);
    syncTestWithStorage(test);
  };

  return {
    test,
    currentQuestion,
    currentQuestionAnswered,
    questionCount,
    processToNextQuestion,
    processToRandomQuestion,
    processToQuestion,
    resetTest,
    validateAnswers,
  };
}
