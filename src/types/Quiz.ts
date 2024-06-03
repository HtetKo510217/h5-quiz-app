export type UserQuizResult = {
  id: number;
  name: string;
  rank: number;
  score: number;
  completed: number;
  avatar: string;
};

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizData {
  [key: string]: Question;
}
