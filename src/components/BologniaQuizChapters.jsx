import { useState } from "react";
import chapters from "../data/bologniaChapters.json";
import { Link } from "react-router-dom";

const CARDS_PER_PAGE = 12;

export default function BologniaQuizChapters() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(chapters.length / CARDS_PER_PAGE);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentChapters = chapters.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-gray-900 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">
            Bolognia – Quiz Chapters
          </h1>
          <p className="mt-2 text-gray-400">
            Select a chapter to start practicing.
          </p>
        </div>

        {/* Chapter Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentChapters.map((chapter) => (
            <div
              key={chapter.id}
              className="overflow-hidden rounded-lg border border-white/10 bg-gray-800 hover:border-indigo-500/50 transition"
            >
              {/* Image */}
              <img
                src={`${import.meta.env.BASE_URL}${chapter.image}`}
                alt={chapter.title}
                className="h-40 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white">
                  {chapter.id}. {chapter.title}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  {chapter.description}
                </p>

                <Link to={`/QuizTest/${chapter.id}`}>
                <button
                  className="mt-6 w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition"
                >
                  Start Quiz →
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="rounded-md px-3 py-1.5 text-sm font-medium text-white disabled:opacity-40 hover:bg-gray-800"
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(
              Math.max(0, currentPage - 3),
              Math.min(totalPages, currentPage + 2)
            )
            .map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                  page === currentPage
                    ? "bg-indigo-500 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                {page}
              </button>
            ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="rounded-md px-3 py-1.5 text-sm font-medium text-white disabled:opacity-40 hover:bg-gray-800"
          >
            Next →
          </button>
        </div>
      </div>
    </main>
  );
}
