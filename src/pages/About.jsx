import React from "react";
import { FaUserPlus, FaPoll, FaClipboardCheck } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
          플랫폼 소개
        </h1>
        <p className="text-lg text-white/80 mb-12 leading-relaxed">
          OPIC Mock Test Platform은 실제 시험과 유사한 환경에서 연습할 수 있는 AI 기반 모의시험 시스템입니다.
          <br />
          실시간 음성 인식, 자동 피드백 분석, 맞춤형 문제 제공을 통해 여러분의 말하기 실력을 체계적으로 향상시켜드립니다.
        </p>

        <h2 className="text-3xl font-bold mb-8 text-purple-300">이용 방법</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition">
            <FaUserPlus className="text-3xl text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. 회원가입</h3>
            <p className="text-white/70">
              이메일과 비밀번호를 입력해 간단히 가입할 수 있습니다.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition">
            <FaPoll className="text-3xl text-green-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. 설문조사</h3>
            <p className="text-white/70">
              학습 목적과 관심 주제를 선택하면, AI가 맞춤형 문제를 생성합니다.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition">
            <FaClipboardCheck className="text-3xl text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. 시험 응시</h3>
            <p className="text-white/70">
              준비되셨다면 실제 시험과 동일한 포맷의 모의고사를 진행해보세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

