export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  success?: boolean;
  seen?: boolean;
}

export default interface Test {
  id: string;
  name: string;
  multipleChoice: boolean;
  questions: Question[];
  uploadDate: Date;
}
