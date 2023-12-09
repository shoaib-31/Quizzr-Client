import Dashboard from "./Components/Dashboard";
import MyQuiz from "./Components/MyQuiz";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Quizzes from "./Components/Quizzes";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/my-quizzes" element={<MyQuiz />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quiz" element={<Quizzes />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
