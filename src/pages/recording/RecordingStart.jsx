import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RecordingStart() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/recording"); // ✅ 3초 뒤 녹음 페이지로 이동
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, [navigate]);

  return (
    <div className="p-10 text-center text-xl">
      🖊 시험이 곧 시작됩니다! 준비하세요!
    </div>
  );
}

export default RecordingStart;
