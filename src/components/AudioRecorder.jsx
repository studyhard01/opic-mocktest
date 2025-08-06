
import React, { useEffect, useRef, useState } from "react";

function AudioRecorder({ start, onFinish }) {
  const [recording, setRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const mediaRecorderRef = useRef(null);
  const intervalRef = useRef(null);
  const chunks = useRef([]);

  useEffect(() => {
    if (start && !recording) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (e) => chunks.current.push(e.data);

        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks.current, { type: "audio/webm" });
          const audioUrl = URL.createObjectURL(blob);
          console.log("Recorded audio:", audioUrl);
          onFinish();
        };

        chunks.current = [];
        mediaRecorder.start();
        setRecording(true);

        intervalRef.current = setInterval(() => {
          setElapsed((prev) => {
            if (prev >= 60) {
              handleStop();
              return 60;
            }
            return prev + 1;
          });
        }, 1000);
      });
    }
  }, [start]);

  const handleStop = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      clearInterval(intervalRef.current);
      setRecording(false);
    }
  };

  return (
    <div className="mt-4">
      <p className="text-gray-700 mb-2">
        ⏱️ 녹음 중: {elapsed}초 / 60초
      </p>
      <button
        onClick={handleStop}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        녹음 종료
      </button>
    </div>
  );
}

export default AudioRecorder;
