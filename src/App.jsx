import { useState } from "react";
import Body from "./components/Body";
import QuizList from "./components/QuizList";
import BologniaQuizChapters from "./components/BologniaQuizChapters";
import QuizTest from "./components/QuizTest";
import Result from "./components/Result";
import Header from "./components/Header";

export default function App() {
  const [page, setPage] = useState("home");
  const [activeChapter, setActiveChapter] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <>
       <Header onNavigate={setPage} />
      {page === "home" && <Body onNavigate={setPage} />}

      {page === "quiz-list" && <QuizList onSelectQuiz={() => setPage("chapters")} />}

      {page === "chapters" && (
        <BologniaQuizChapters
          onStartChapter={(chapterId) => {
            setActiveChapter(chapterId);
            setPage("quiz-test");
          }}
        />
      )}

      {page === "quiz-test" && (
        <QuizTest
          chapterId={activeChapter}
          onFinish={(data) => {
            setResult(data);
            setPage("result");
          }}
        />
      )}

      {page === "result" && (
        <Result
          totalQuestions={result.total}
          correctAnswers={result.correct}
          onRetry={() => setPage("quiz-test")}
          onBack={() => setPage("chapters")}
        />
      )}
    </>
  );
}
