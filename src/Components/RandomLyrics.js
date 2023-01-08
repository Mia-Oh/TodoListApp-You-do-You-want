import React from "react";

function RandomLyrics(){

  const lyrics = [`자 이제는 기나긴 모험을 시작할 시간 - 행운을 빌어줘, 원필`, '행복했던 날들이었다', '장난 아닌데','좋아합니다','한 페이지가 될 수 있게']

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  }

  return (
    <div>
      <p>{lyrics[getRandomIndex(lyrics.length)]}</p>
    </div>
  );
}

export default RandomLyrics;