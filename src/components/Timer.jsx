import { useEffect } from "react";

function Timer({ timer, setTimer, totalTime, onTimeout }) {
  useEffect(() => {
    if (timer <= 0) {
      onTimeout(); // auto-submit answer when time runs out
      return;
    }

    const countdown = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(countdown);
  }, [timer]);

  const progressPercent = (timer / totalTime) * 100;

  return (
    <div className="w-full mb-4">
      <p className="text-red-600 font-semibold text-lg mb-2">⏱️ Time left: {timer}s</p>
      <div className="w-full bg-blue-100 h-3 rounded-full">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Timer;
