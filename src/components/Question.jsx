function Question({ questionData, onAnswer }) {
  if (!questionData) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">{questionData.question}</p>
      <div className="grid gap-3">
        {questionData.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(option)}
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
