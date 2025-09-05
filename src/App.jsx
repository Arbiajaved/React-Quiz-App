import { useState, useEffect } from "react";
import Quiz from "./components/Quiz.jsx";
import Results from "./components/Results.jsx";
import questions from "./data/questions.js";

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [questionSet, setQuestionSet] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);

  useEffect(() => {
    if (difficulty) {
      const selectedQuestions = questions[difficulty] || [];
      setQuestionSet(selectedQuestions);
      setCurrentQuestion(0);
      setScore(0);
      setUserAnswers([]);
      setIsFinished(false);
    }
  }, [difficulty]);

  const handleAnswer = (selected) => {
    const correct = questionSet[currentQuestion].answer === selected;
    if (correct) setScore(prev => prev + 1);

    setUserAnswers([...userAnswers, {
      question: questionSet[currentQuestion].question,
      selected: selected || "No Answer",
      correctAnswer: questionSet[currentQuestion].answer,
    }]);

    if (currentQuestion + 1 < questionSet.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
      const finalScore = score + (correct ? 1 : 0);
      if (finalScore > highScore) {
        localStorage.setItem("highScore", finalScore);
        setHighScore(finalScore);
      }
    }
  };

  const restartQuiz = () => {
    setDifficulty(null);
    setQuestionSet([]);
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers([]);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      {!difficulty ? (
        <div className="bg-white p-6 rounded-2xl shadow-2xl text-center space-y-6">
          <h1 className="text-4xl font-bold text-blue-700">REACT QUIZ APP</h1>
          <p className="text-lg font-semibold">Select Difficulty:</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["easy", "medium", "hard"].map(level => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-500 transition duration-300"
              >
                {level.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      ) : !isFinished ? (
        <Quiz
          questionData={questionSet[currentQuestion]}
          current={currentQuestion}
          total={questionSet.length}
          onAnswer={handleAnswer}
        />
      ) : (
        <Results
          score={score}
          total={questionSet.length}
          userAnswers={userAnswers}
          restart={restartQuiz}
          highScore={highScore}
        />
      )}
    </div>
  );
}

export default App;
