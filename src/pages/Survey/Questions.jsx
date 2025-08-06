// src/pages/survey/Questions.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    level: "",
    part1: "",
    part2_1: "",
    part2_2: "",
    part3: "",
    part4: [],
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckbox = (value) => {
    setForm((prev) => {
      const exists = prev.part4.includes(value);
      return {
        ...prev,
        part4: exists ? prev.part4.filter((v) => v !== value) : [...prev.part4, value],
      };
    });
  };

  const handleNext = () => {
    navigate("/survey/summary", { state: form });
  };

  const part4Options = [
    "영화 보기", "게임하기", "공연 보기", "클럽/나이트클럽 가기", "SNS에 글 올리기", "캠핑 하기", "구직활동하기",
    "리얼리티 쇼 시청", "쇼핑하기", "TV 시청 하기", "콘서트 보기", "뉴스 보기/듣기", "자원봉사", "차 드라이브 하기",
    "요리 관련 프로그램 시청", "요리하기", "음악 감상하기", "악기 연주하기", "사진 촬영하기", "그림 그리기", "춤추기",
    "여행 관련 블로그/잡지 읽기", "독서", "글쓰기", "신문 읽기", "아이에게 책 읽어주기", "애완동물 키우기", "주식 투자",
    "혼자 노래 부르기나 합창", "농구", "야구", "축구", "배구", "조깅", "걷기", "요가", "수영", "하이킹/트레킹",
    "테니스", "배드민턴", "스키/스노보드", "헬스", "운동 수업 수강", "운동 안함", "국내 출장", "해외 출장",
    "국내 여행", "해외 여행", "집에서 보내는 휴가"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">설문조사</h1>

        {/* Step 1 */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">1. 영어 말하기 수준을 선택해 주세요.</h2>
          <div className="flex flex-wrap gap-2">
            {[4, 5, 6].map((level) => (
              <button
                key={level}
                onClick={() => handleChange("level", `${level}`)}
                className={`px-4 py-2 rounded-full border ${
                  form.level === `${level}` ? "bg-blue-500 text-white" : "bg-white"
                }`}
              >
                Level {level}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">2. 직업을 선택해주세요.</h2>
          <div className="flex flex-wrap gap-2">
            {["사업/회사", "재택근무/재택사업", "교사/교육자", "일 경험 없음"].map((job) => (
              <button
                key={job}
                onClick={() => handleChange("part1", job)}
                className={`px-4 py-2 rounded-full border ${
                  form.part1 === job ? "bg-blue-500 text-white" : "bg-white"
                }`}
              >
                {job}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">3. 현재 당신은 학생입니까?</h2>
          <div className="flex gap-4 mb-4">
            {["예", "아니요"].map((opt) => (
              <button
                key={opt}
                onClick={() => handleChange("part2_1", opt)}
                className={`px-4 py-2 rounded-full border ${
                  form.part2_1 === opt ? "bg-blue-500 text-white" : "bg-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="font-semibold mb-2">최근 어떤 강의를 수강했습니까?</p>
          <div className="flex flex-wrap gap-2">
            {[
              "학위 과정 수업",
              "전문 기술 향상을 위한 평생 학습",
              "어학 수업",
              "수강 후 5년 이상 지남",
            ].map((opt) => (
              <button
                key={opt}
                onClick={() => handleChange("part2_2", opt)}
                className={`px-4 py-2 rounded-full border ${
                  form.part2_2 === opt ? "bg-blue-500 text-white" : "bg-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">4. 현재 거주 형태를 선택해 주세요.</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "개인주택이나 아파트에 홀로 거주",
              "친구나 룸메이트와 함께 거주",
              "가족과 함께 거주",
              "학교 기숙사",
              "군대 막사",
            ].map((opt) => (
              <button
                key={opt}
                onClick={() => handleChange("part3", opt)}
                className={`px-4 py-2 rounded-full border ${
                  form.part3 === opt ? "bg-blue-500 text-white" : "bg-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">5. 여가 활동으로 즐기는 취미를 선택해주세요 (복수 선택)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-60 overflow-y-auto">
            {part4Options.map((hobby) => (
              <label
                key={hobby}
                className={`px-4 py-2 rounded-full border cursor-pointer ${
                  form.part4.includes(hobby) ? "bg-blue-500 text-white" : "bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  value={hobby}
                  checked={form.part4.includes(hobby)}
                  onChange={() => handleCheckbox(hobby)}
                />
                {hobby}
              </label>
            ))}
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
          >
            설문 제출 → 요약보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
