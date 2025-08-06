// src/pages/survey/Summary.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Summary() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    level,
    part1,
    part2_1,
    part2_2,
    part3,
    part4 = [],
  } = state || {};

  const handleRetake = () => {
    navigate("/survey/questions");
  };

  const handleStartTest = () => {
    navigate("/recording/start");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl text-center">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">설문 요약</h1>

        <div className="text-left space-y-3 mb-8 text-gray-700 leading-relaxed">
          <p><span className="font-semibold">📊 영어 수준:</span> {level}</p>
          <p><span className="font-semibold">💼 직업:</span> {part1}</p>
          <p><span className="font-semibold">🎓 학생 여부:</span> {part2_1}</p>
          <p><span className="font-semibold">📚 수강 강의:</span> {part2_2}</p>
          <p><span className="font-semibold">🏠 거주 형태:</span> {part3}</p>
          <p><span className="font-semibold">🎯 취미 활동:</span> {part4.length > 0 ? part4.join(", ") : "없음"}</p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleRetake}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition"
          >
            다시 설문조사하기
          </button>
          <button
            onClick={handleStartTest}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            시험 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
