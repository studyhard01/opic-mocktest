import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/survey/questions");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          OPIc Mock Test Platform
        </h1>
        <p className="text-gray-700 mb-6">
          실제 시험과 유사한 환경에서 연습하며 말하기 실력을 향상시켜 보세요.
          <br />
          React 기반으로 만든 지능형 모의고사 시스템입니다.
        </p>
        <button
          onClick={handleStartClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          모의고사 시작하기
        </button>
      </div>
    </div>
  );
}

export default Home;
