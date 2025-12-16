import Header from "./components/Header";
import Body from "./components/Body";
import QuizList from "./components/QuizList";
import BologniaQuizChapters from "./components/BologniaQuizChapters";
import QuizTest from "./components/QuizTest";
import Result from "./components/Result";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/QuizList" element={<QuizList />} />
        <Route path="/BologniaQuizChapters" element={<BologniaQuizChapters />} />
        <Route path="/QuizTest/:chapterId" element={<QuizTest />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </div>
  );
}
