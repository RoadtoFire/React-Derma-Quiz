import Bolognia from "../assets/Bolognia.png"
import Rooks from "../assets/Rooks.jpeg"
import { Link } from "react-router-dom";

export default function QuizList() {

  const quizzes = [
    {
      id: 1,
      title: "Bolognia",
      description: "Entire spectrum of skin diseases, from basic science and diagnosis to treatment.",
      chapters: 159,
      image: Bolognia,
      path: "/BologniaQuizChapters" // Added path
    },
    {
      id: 2,
      title: "Rooks",
      description: "The world's most comprehensive medical reference for skin diseases.",
      chapters: 161, // Updated to your actual count
      image: Rooks,
      path: "/RooksQuizChapters" // Unique path for Rooks
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">Choose a Quiz</h1>
          <p className="mt-2 text-gray-400">Select a subject to view chapters and start practicing.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="overflow-hidden rounded-lg border border-white/10 bg-gray-800 transition hover:border-indigo-500/50"
            >
              <img src={quiz.image} alt={quiz.title} className="h-40 w-full object-cover" />

              <div className="p-6">
                <h2 className="text-xl font-semibold text-white">{quiz.title}</h2>
                <p className="mt-2 text-sm text-gray-400">{quiz.description}</p>
                <p className="mt-4 text-sm text-gray-300">📚 {quiz.chapters} chapters</p>

                {/* DYNAMIC LINK BASED ON THE DATA OBJECT */}
                <Link to={quiz.path}>
                  <button className="mt-6 w-full rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-400 transition-colors">
                    View Chapters →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}