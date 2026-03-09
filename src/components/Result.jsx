import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  // 1️⃣ Read all data passed from QuizTest via location.state
  const { totalQuestions, correctAnswers, bookType, chapterId } = location.state || {};

  // 2️⃣ Guard clause: Handle direct URL access or page refresh
  if (totalQuestions === undefined || correctAnswers === undefined) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-gray-400">
        <p>No result data available.</p>
        <button 
          onClick={() => navigate("/QuizList")}
          className="mt-4 text-indigo-400 hover:underline"
        >
          Go to Quiz List
        </button>
      </div>
    );
  }

  // 3️⃣ Calculate metrics
  const scorePercent = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = scorePercent >= 60;

  // 4️⃣ Dynamic Route Generator for the "Back" button
  const returnPath = bookType?.toLowerCase() === "rooks" 
    ? "/RooksQuizChapters" 
    : "/BologniaQuizChapters";

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 px-6 py-12">
      <div className="w-full max-w-xl rounded-lg border border-white/10 bg-gray-800 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">Quiz Completed</h1>
        <p className="mt-2 text-gray-400">Here’s how you performed</p>

        {/* Score Display */}
        <div className="mt-8">
          <div className="text-6xl font-bold text-white">{scorePercent}%</div>
          <p className="mt-2 text-gray-300">
            {correctAnswers} / {totalQuestions} correct
          </p>
        </div>

        {/* Pass / Fail Badge */}
        <div
          className={`mt-6 inline-block rounded-md px-4 py-2 text-sm font-semibold ${
            passed ? "bg-green-600/20 text-green-400" : "bg-red-600/20 text-red-400"
          }`}
        >
          {passed ? "Passed" : "Needs Improvement"}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          
          {/* Explicit Retry Route */}
          <button
            onClick={() => navigate(`/QuizTest/${bookType}/${chapterId}`)}
            className="rounded-md bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Retry Quiz
          </button>

          {/* Dynamic Return Route */}
          <button
            onClick={() => navigate(returnPath)}
            className="rounded-md border border-white/20 bg-transparent px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Back to Chapters
          </button>
        </div>
      </div>
    </main>
  );
}