import { useState } from "react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Quizzes", href: "#" },
  { name: "Mock Exams", href: "#" },
  { name: "Progress", href: "#" },
  { name: "About", href: "#" },
];

function Body({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* HERO SECTION */}
      <main className="relative isolate px-6 pt-24 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 blur-3xl"
        >
          <div className="mx-auto h-96 w-96 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-30 rounded-full" />
        </div>

        <div className="mx-auto max-w-2xl py-32 text-center">
          <div className="mb-8 inline-block rounded-full px-4 py-1 text-sm text-gray-400 ring-1 ring-white/10">
            High-yield questions for real medical exams
          </div>

          <h1 className="text-5xl sm:text-7xl font-semibold text-white">
            Master Dermatology.<br />One Question at a Time.
          </h1>

          <p className="mt-8 text-lg text-gray-400">
            Practice clinically relevant questions, track your progress,
            and prepare confidently for your medical exams.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => onNavigate("quiz-list")}
              className="rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
            >
              Start Practicing
            </button>

            <button
              onClick={() => onNavigate("quiz-list")}
              className="text-sm font-semibold text-white"
            >
              Explore quizzes →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Body;
