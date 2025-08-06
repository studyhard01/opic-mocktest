import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuestionBox from "./QuestionBox";

const dummyQuestions = [
  "Tell me about your daily routine.",
  "Describe your neighborhood.",
  "What kind of music do you like?",
  "Tell me about your job or studies.",
  "Describe a recent trip you took.",
  "What do you usually do on weekends?",
  "Tell me about your favorite movie.",
  "Describe a restaurant you like.",
  "What do you do when you're stressed?",
  "Tell me about a friend you spend time with.",
  "Describe your house or apartment.",
  "What hobbies do you enjoy?",
  "Tell me about a special holiday you remember.",
  "What kind of books do you read?",
  "Describe a memorable experience at work or school."
];

function RecordingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recordings, setRecordings] = useState([]); // 녹음 결과 저장
  const navigate = useNavigate();

  const handleNext = (audioBlob) => {
    setRecordings((prev) => [...prev, audioBlob]);
    setCurrentIndex((prev) => prev + 1);
  };

  // ✅ 마지막 문제 끝난 후 navigate
  useEffect(() => {
    if (currentIndex >= dummyQuestions.length) {
      navigate("/recording/complete", {
        state: {
          questions: dummyQuestions,
          recordings: recordings
        }
      });
    }
  }, [currentIndex, navigate, recordings]);

  // ✅ 화면에는 마지막 문제 넘긴 후 아무것도 안 보여주도록
  if (currentIndex >= dummyQuestions.length) {
    return null;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">문제 {currentIndex + 1} / 15</h2>
      <QuestionBox
        question={dummyQuestions[currentIndex]}
        onNext={handleNext}
      />
    </div>
  );
}

export default RecordingPage;
