import { useState } from "react";

const questions = [
  {
    question: "What is my favorite color?",
    options: ["Blue", "Black", "Red", "Pink"],
    answer: "Black",
  },
  {
    question: "Where did we first meet?",
    options: ["College", "Park", "Instagram", "Cafe"],
    answer: "Instagram",
  },
  {
    question: "What is my pet name for you?",
    options: ["Baby", "Jaan", "Cutie", "Sweetie"],
    answer: "Jaan",
  },
  {
    question: "Which month is our anniversary?",
    options: ["January", "February", "March", "April"],
    answer: "February",
  },
  {
    question: "What do I love the most about you?",
    options: ["Smile", "Eyes", "Voice", "Everything"],
    answer: "Everything",
  },
];

export default function LoveQuizGame() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    const next = current + 1;
    if (next < questions.length) setCurrent(next);
    else setShowResult(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-6 text-center">
        {!showResult ? (
          <>
            <h2 className="text-xl font-bold mb-4">
              {questions[current].question}
            </h2>
            <div className="grid gap-3">
              {questions[current].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              You finished the game!
            </h2>
            <p className="text-lg mb-4">
              You got <span className="font-bold">{score}</span> out of{" "}
              {questions.length} ❤️
            </p>
            <div className="text-3xl animate-bounce">❤️</div>
            <p className="text-md font-medium mt-4">
              No matter the score, I love you always! 💖
            </p>
          </>
        )}
      </div>
    </div>
  );
}
