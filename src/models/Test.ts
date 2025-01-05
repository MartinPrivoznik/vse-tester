export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
  userAnswerIds?: number[];
  seen?: boolean;
}

export default interface Test {
  id: string;
  name: string;
  multipleChoice: boolean;
  questions: Question[];
  uploadDate: Date;
}
