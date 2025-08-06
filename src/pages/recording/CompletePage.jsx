
import React from "react";
import { useNavigate } from "react-router-dom";

function CompletePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 수고하셨습니다!</h2>
        <p className="text-gray-700 mb-6">모든 문제를 완료했습니다. 녹음 파일이 저장되었습니다.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default CompletePage;
