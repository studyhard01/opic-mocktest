
// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import Questions from "./pages/Survey/Questions";
import Summary from "./pages/Survey/Summary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route path="/survey/questions" element={<Questions />} />
      <Route path="/survey/summary" element={<Summary />} />
    </Routes>
  );
}

export default App;
