import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/survey/questions");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">OPIc Mock Test Platform</h1>
      <p className="mb-6">
        실제 시험과 유사한 환경에서 연습하며 말하기 실력을 향상시켜 보세요. <br />
        React 기반으로 만든 지능형 모의고사 시스템입니다.
      </p>
      <button onClick={handleStartClick} className="border px-4 py-2 bg-blue-500 text-white rounded">
        모의고사 시작하기
      </button>
    </div>
  );
}

export default Home;
