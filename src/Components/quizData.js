const quizInfo = {
  instruction:
    "1. Duration: You have 3 minutes to complete the quiz. 2. Scoring: Each correct answer earns you 4 marks, and each wrong answer results in a deduction of 1 mark. 3. Questions: The quiz consists of 10 questions. 4. Good Luck! Feel free to review your answers before submitting.\n",
  duration: 3,
  correctMarks: 4,
  wrongMarks: -1,
  totalQues: 10,
};
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Delhi", "Italy"],
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Narendra Modi", "Yogi Adityanath"],
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Earth", "Venus"],
  },
];
export { quizInfo, questions };
