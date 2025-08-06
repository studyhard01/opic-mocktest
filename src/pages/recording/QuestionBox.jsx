import React, { useEffect, useRef, useState } from "react";

function QuestionBox({ question, onNext }) {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef(null);

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);
    setRecordedChunks([]);

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        setRecordedChunks((prev) => [...prev, e.data]);
      }
    };

    recorder.onstop = () => {
      clearInterval(timerRef.current);
      setIsRecording(false);
      setIsFinished(true);
    };

    recorder.start();
    setIsRecording(true);
    setTimeLeft(60);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          recorder.stop(); // 1분 지나면 자동 종료
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleStopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
    }
  };

  const handleNext = () => {
    const audioBlob = new Blob(recordedChunks, { type: "audio/webm" });
    onNext(audioBlob);
    setIsFinished(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
      }
    };
  }, []);

  return (
    <div className="p-6 border rounded-lg shadow text-center">
      <p className="text-xl font-semibold mb-4">{question}</p>

      {!isRecording && !isFinished && (
        <button
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          onClick={handleStartRecording}
        >
          🎙 녹음 시작
        </button>
      )}

      {isRecording && (
        <div className="mb-4">
          <p className="text-red-600 font-semibold mb-2">
            ⏱ 남은 시간: {timeLeft}초
          </p>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            onClick={handleStopRecording}
          >
            🛑 녹음 종료
          </button>
        </div>
      )}

      {isFinished && (
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mt-4"
          onClick={handleNext}
        >
          ➡️ 다음 문제
        </button>
      )}
    </div>
  );
}

export default QuestionBox;
