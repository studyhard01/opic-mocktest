
// src/pages/survey/Summary.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Summary() {
  const location = useLocation();
  const navigate = useNavigate();
  const form = location.state;

  if (!form) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>❗ 설문 데이터가 없습니다.</h2>
        <button onClick={() => navigate("/survey/questions")}>설문 다시 하기</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>📋 설문 요약</h2>

      <h3>Step 1: Self Assessment</h3>
      <p>선택한 레벨: <strong>{form.level}</strong></p>

      <h3>Step 2: Background Survey</h3>

      <p><strong>Part 1:</strong> {form.part1}</p>
      <p><strong>Part 2-1:</strong> {form.part2_1}</p>
      <p><strong>Part 2-2:</strong> {form.part2_2}</p>
      <p><strong>Part 3:</strong> {form.part3}</p>
      <p><strong>Part 4 (여가 활동):</strong></p>
      <ul>
        {form.part4.map((activity, idx) => (
          <li key={idx}>{activity}</li>
        ))}
      </ul>

      <br />
      <button onClick={() => navigate("/survey/questions")}>수정하러 가기</button>
    </div>
  );
}

export default Summary;
