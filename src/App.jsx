
// src/App.jsx
import './index.css';
import RecordingCompletePage from "@/pages/recording/RecordingCompletePage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import Questions from "./pages/Survey/Questions";
import Summary from "./pages/Survey/Summary";
import RecordingStart from "@/pages/recording/RecordingStart";
import RecordingPage from "@/pages/recording/RecordingPage";
import CompletePage from "@/pages/recording/CompletePage";

function App() {
  return (
    <Routes>
      <Route path="/recording/start" element={<RecordingStart />} />
      <Route path="/recording" element={<RecordingPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route path="/survey/questions" element={<Questions />} />
      <Route path="/survey/summary" element={<Summary />} />
      <Route path="/recording/complete" element={<RecordingCompletePage />} />
    </Routes>
  );
}

export default App;
