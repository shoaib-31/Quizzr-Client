import Dashboard from "./Components/Dashboard";
import MyQuiz from "./Components/MyQuiz";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Quizzes from "./Components/Quizzes";
import CreateQuiz from "./Components/CreateQuiz";
import Quiz from "./Components/Quiz";
import Instructions from "./Components/Instructions";
import Submitted from "./Components/Submitted";
import { useSelector } from "react-redux";
import LoginPage from "./Components/LoginPage";
import Result from "./Components/Result";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <Router>
      {user.isLoggedIn ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-quizzes" element={<MyQuiz />} />
            <Route path="/my-quizzes/create-quiz" element={<CreateQuiz />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<Quizzes />} />
            <Route path="/quiz/:_id" element={<Quiz />} />
            <Route path="/result/:_id" element={<Result />} />
            <Route path="/quiz/instructions/:_id" element={<Instructions />} />
            <Route path="/submitted" element={<Submitted />} />
          </Routes>
        </>
      ) : (
        <LoginPage />
      )}
    </Router>
  );
}

export default App;
