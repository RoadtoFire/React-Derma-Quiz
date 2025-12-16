import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Quizzes", href: "#", current: false },
  { name: "Mock Exams", href: "#", current: false },
  { name: "Progress", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <Link to="/">  
            <div className="flex items-center">
              <span
                className="cursor-pointer text-xl font-bold text-white"
              >
                MedQuiz<span className="text-indigo-400">Pro</span>
              </span>
            </div>
          </Link>
          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:space-x-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => {
                  if (item.name === "Dashboard") {
                    onNavigate("home");
                  }
                }}
                className={classNames(
                  item.current
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              🔔
            </button>

            <button
              type="button"
              className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400"
            >
              Log in
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-white/10 bg-gray-900 px-4 py-3 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                if (item.name === "Dashboard") {
                  onNavigate("home");
                  setMobileOpen(false);
                }
              }}
              className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
