export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
  userAnswerIds?: number[];
}

export default interface Test {
  name: string;
  multipleChoice: boolean;
  questions: Question[];
}
