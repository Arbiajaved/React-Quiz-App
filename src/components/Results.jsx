function Results({ score, total, userAnswers, restart, highScore }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-xl text-center space-y-4">
      <h2 className="text-2xl font-bold text-blue-700">Quiz Completed 🎉</h2>
      <p className="text-lg">You scored <span className="font-semibold">{score}</span> out of {total}</p>
      <p className="text-purple-600">🏆 High Score: {highScore}</p>

      <div className="text-left space-y-3">
        {userAnswers.map((ans, idx) => (
          <div key={idx} className="p-3 border rounded-lg bg-gray-50 shadow-sm">
            <p className="font-medium">{ans.question}</p>
            <p>Your answer: <span className={ans.selected === ans.correctAnswer ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{ans.selected}</span></p>
            <p>Correct answer: <span className="text-green-600 font-semibold">{ans.correctAnswer}</span></p>
          </div>
        ))}
      </div>

      <button
        onClick={restart}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200 shadow"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
