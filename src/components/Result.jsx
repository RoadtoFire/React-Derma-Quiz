import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  // Read data passed from QuizTest
  const { totalQuestions, correctAnswers } = location.state || {};

  // Guard: direct access or refresh
  if (
    totalQuestions === undefined ||
    correctAnswers === undefined
  ) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-gray-400">
        No result data available.
      </div>
    );
  }

  const scorePercent = Math.round(
    (correctAnswers / totalQuestions) * 100
  );

  const passed = scorePercent >= 60;

  return (
    <main className="min-h-screen bg-gray-900 px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-xl rounded-lg border border-white/10 bg-gray-800 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">
          Quiz Completed
        </h1>

        <p className="mt-2 text-gray-400">
          Here’s how you performed
        </p>

        {/* Score */}
        <div className="mt-8">
          <div className="text-6xl font-bold text-white">
            {scorePercent}%
          </div>
          <p className="mt-2 text-gray-300">
            {correctAnswers} / {totalQuestions} correct
          </p>
        </div>

        {/* Pass / Fail */}
        <div
          className={`mt-6 rounded-md px-4 py-2 text-sm font-semibold ${
            passed
              ? "bg-green-600/20 text-green-400"
              : "bg-red-600/20 text-red-400"
          }`}
        >
          {passed ? "Passed" : "Needs Improvement"}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => navigate(-1)}
            className="rounded-md bg-indigo-500 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Retry Quiz
          </button>

          <button
            onClick={() => navigate("/BologniaQuizChapters")}
            className="rounded-md border border-white/10 px-5 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-700"
          >
            Back to Chapters
          </button>
        </div>
      </div>
    </main>
  );
}
