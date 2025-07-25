
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
      if (exists) {
        return {
          ...prev,
          part4: prev.part4.filter((v) => v !== value),
        };
      } else {
        return {
          ...prev,
          part4: [...prev.part4, value],
        };
      }
    });
  };

  const handleNext = () => {
    // 필요한 유효성 검사는 이곳에 추가 가능
    navigate("/survey/summary", { state: form });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Step 1: Self Assessment</h2>
      <p>본인의 영어 말하기 수준을 선택해 주세요.</p>
      {[1, 2, 3, 4, 5, 6].map((level) => (
        <div key={level}>
          <label>
            <input
              type="radio"
              name="level"
              value={level}
              checked={form.level === `${level}`}
              onChange={() => handleChange("level", `${level}`)}
            />
            {` Sample Audio Level ${level} - 설명 텍스트는 이미지 참고`}
          </label>
        </div>
      ))}

      <hr />

      <h2>Step 2: Background Survey</h2>
      <h3>Part 1 of 4</h3>
      <p>현재 귀하는 어느 분야에 종사하고 계십니까?</p>
      {["사업/회사", "재택근무/재택사업", "교사/교육자", "일 경험 없음"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="part1"
            value={option}
            checked={form.part1 === option}
            onChange={() => handleChange("part1", option)}
          />
          {option}
        </label>
      ))}

      <h3>Part 2 of 4</h3>
      <p>현재 당신은 학생입니까?</p>
      {["예", "아니요"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="part2_1"
            value={option}
            checked={form.part2_1 === option}
            onChange={() => handleChange("part2_1", option)}
          />
          {option}
        </label>
      ))}
      <p>최근 어떤 강의를 수강했습니까?</p>
      {[
        "학위 과정 수업",
        "전문 기술 향상을 위한 평생 학습",
        "어학 수업",
        "수강 후 5년 이상 지남",
      ].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="part2_2"
            value={option}
            checked={form.part2_2 === option}
            onChange={() => handleChange("part2_2", option)}
          />
          {option}
        </label>
      ))}

      <h3>Part 3 of 4</h3>
      <p>현재 귀하는 어디에 살고 계십니까?</p>
      {[
        "개인주택이나 아파트에 홀로 거주",
        "친구나 룸메이트와 함께 주택이나 아파트에 거주",
        "가족(배우자/자녀/기타 가족 일원)과 함께 주택이나 아파트에 거주",
        "학교 기숙사",
        "군대 막사",
      ].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="part3"
            value={option}
            checked={form.part3 === option}
            onChange={() => handleChange("part3", option)}
          />
          {option}
        </label>
      ))}

      <h3>Part 4 of 4</h3>
      <p>귀하는 여가 활동으로 주로 무엇을 하십니까? (12개 이상 고르시오)</p>
      {[
        "독서",
        "운동",
        "영화 감상",
        "음악 감상",
        "요리",
        "게임",
        "사진 찍기",
        "그림 그리기",
        "여행",
        "쇼핑",
        "정원 가꾸기",
        "수공예",
        "악기 연주",
        "봉사 활동",
      ].map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            name="part4"
            value={option}
            checked={form.part4.includes(option)}
            onChange={() => handleCheckbox(option)}
          />
          {option}
        </label>
      ))}

      <br />
      <button onClick={handleNext} style={{ marginTop: "2rem" }}>
        설문 제출 → 요약보기
      </button>
    </div>
  );
}

export default Questions;
