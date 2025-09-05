import Question from "./Question.jsx";
import Timer from "./Timer.jsx";
import { useState, useEffect } from "react";

function Quiz({ questionData, current, total, onAnswer }) {
  const totalTime = 30;
  const [timer, setTimer] = useState(totalTime);

  useEffect(() => {
    setTimer(totalTime); // reset timer on question change
  }, [current]);

  const handleTimeout = () => {
    onAnswer(null);
    setTimer(totalTime);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-xl text-center space-y-6">
      <h2 className="text-2xl font-bold text-blue-700">Question {current + 1} of {total}</h2>
      
      <Timer timer={timer} setTimer={setTimer} totalTime={totalTime} onTimeout={handleTimeout} />

      <Question questionData={questionData} onAnswer={onAnswer} />

      <div className="w-full bg-blue-100 h-3 rounded-full mt-4">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Quiz;
