
const questions = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  text: `예시 질문 ${i + 1}번입니다. (이곳에 실제 질문 내용을 삽입하세요)`,
  imageUrl: "/sample-avatar.jpg", // public 폴더에 있는 이미지 경로
  audioUrl: "/sample-audio.mp3", // public 폴더에 있는 음성파일 경로
}));

export default questions;
