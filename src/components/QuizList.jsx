import Bolognia from "../assets/Bolognia.png"
import Rooks from "../assets/Rooks.jpeg"
export default function QuizList({ onSelectQuiz }) {

  const quizzes = [
    {
      id: 1,
      title: "Bolognia",
      description: "Entire spectrum of skin diseases, from basic science and diagnosis to treatment.",
      chapters: 159,
      image:
        Bolognia,
    },
    {
      id: 2,
      title: "Rooks",
      description: "he world's most comprehensive medical reference for skin diseases.",
      chapters: 18,
      image:
        Rooks,
    },
    
  ];

  return (
    <main className="min-h-screen bg-gray-900 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">
            Choose a Quiz
          </h1>
          <p className="mt-2 text-gray-400">
            Select a subject to view chapters and start practicing.
          </p>
        </div>

        {/* Quiz Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="overflow-hidden rounded-lg border border-white/10 bg-gray-800 transition hover:border-indigo-500/50"
            >
              {/* Card Image */}
              <img
                src={quiz.image}
                alt={quiz.title}
                className="h-40 w-full object-cover"
              />

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white">
                  {quiz.title}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  {quiz.description}
                </p>

                <p className="mt-4 text-sm text-gray-300">
                  📚 {quiz.chapters} chapters
                </p>

                <div className="mt-6">
                  <button
                    onClick={() => onSelectQuiz(quiz.id)}
                    className="mt-6 w-full rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-400"
                >
                    View Chapters →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
