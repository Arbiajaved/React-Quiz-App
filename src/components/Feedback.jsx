import { useState, useEffect } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [allFeedback, setAllFeedback] = useState([]);

  // Load saved feedback from localStorage on mount
  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback")) || [];
    setAllFeedback(savedFeedback);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback) return;

    const updatedFeedback = [...allFeedback, feedback];
    setAllFeedback(updatedFeedback);
    localStorage.setItem("feedback", JSON.stringify(updatedFeedback));
    setFeedback(""); // clear input
    alert("Thank you for your feedback!");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-xl mx-auto my-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Give Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {/* Optional: show saved feedback */}
      {allFeedback.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Previous Feedback:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {allFeedback.map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Feedback;
