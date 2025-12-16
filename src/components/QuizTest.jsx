import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questions from "../data/bologniaQuestions.json";

export default function QuizTest() {
  // 1️⃣ Read chapterId from URL
  const { chapterId } = useParams();
  const navigate = useNavigate();

  // 2️⃣ Convert to number (CRITICAL)
  const chapterIdNumber = Number(chapterId);

  // 3️⃣ Filter questions for this chapter
  const chapterQuestions = questions.filter(
    (q) => q.chapterId === chapterIdNumber
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const question = chapterQuestions[currentIndex];

  // 4️⃣ Guard: invalid chapter or no questions
  if (!question) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-gray-400">
        No questions available for this chapter.
      </div>
    );
  }

  const handleSubmit = () => {
    if (selected === question.correctIndex) {
      setScore((s) => s + 1);
    }
    setShowAnswer(true);
  };

  const handleNext = () => {
    const isLastQuestion =
      currentIndex + 1 === chapterQuestions.length;

    if (isLastQuestion) {
      // 5️⃣ Navigate to Result page with score
      navigate("/Result", {
        state: {
          totalQuestions: chapterQuestions.length,
          correctAnswers:
            score +
            (selected === question.correctIndex ? 1 : 0),
        },
      });
      return;
    }

    setSelected(null);
    setShowAnswer(false);
    setCurrentIndex((i) => i + 1);
  };

  return (
    <main className="min-h-screen bg-gray-900 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        {/* Progress */}
        <div className="mb-6 text-gray-400 text-sm">
          Question {currentIndex + 1} of {chapterQuestions.length}
        </div>

        {/* Question Card */}
        <div className="rounded-lg border border-white/10 bg-gray-800 p-6">
          <h2 className="text-xl font-semibold text-white">
            {question.question}
          </h2>

          {/* Options */}
          <div className="mt-6 space-y-3">
            {question.options.map((option, index) => {
              let baseStyle =
                "w-full text-left rounded-md px-4 py-3 border transition";

              if (showAnswer) {
                if (index === question.correctIndex) {
                  baseStyle +=
                    " bg-green-600/20 border-green-500 text-white";
                } else if (index === selected) {
                  baseStyle +=
                    " bg-red-600/20 border-red-500 text-white";
                } else {
                  baseStyle +=
                    " border-white/10 text-gray-300";
                }
              } else {
                baseStyle +=
                  selected === index
                    ? " bg-indigo-500/20 border-indigo-400 text-white"
                    : " border-white/10 text-gray-300 hover:bg-gray-700";
              }

              return (
                <button
                  key={index}
                  disabled={showAnswer}
                  onClick={() => setSelected(index)}
                  className={baseStyle}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showAnswer && (
            <div className="mt-6 rounded-md bg-gray-900 p-4 text-sm text-gray-300">
              <strong className="text-white">Explanation:</strong>{" "}
              {question.explanation}
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 flex justify-between">
            {!showAnswer ? (
              <button
                disabled={selected === null}
                onClick={handleSubmit}
                className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 disabled:opacity-40"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
              >
                Next Question →
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
