import { useLocation, useNavigate } from "react-router-dom";

function RecordingCompletePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, recordings } = location.state || {};

  if (!questions || !recordings) {
    return (
      <div className="p-10 text-center text-xl text-red-600">
        ⚠️ 녹음 데이터가 없습니다.
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-2">🎉 수고하셨습니다!</h1>
      <p className="text-center mb-8">모든 문제를 완료했습니다. 아래에서 녹음을 다시 들어보세요.</p>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <p className="font-semibold mb-2">Q{index + 1}. {question}</p>
            <audio controls src={URL.createObjectURL(recordings[index])} />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default RecordingCompletePage;
