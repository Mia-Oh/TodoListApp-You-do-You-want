import { lyricsData } from "../data/lyricsData";

// CSS에서 전체로 선언해 놓은 white-space: pre-line; 덕분에
// \n을 이용해서 줄바꿈 적용

const Lyrics = () => {
  return (
    <section id="todayLyrics">
      <h4>오늘의 가사</h4>
      <div>
        {/* {lyricsData[2]}<br/>{lyricsData[1]} */}
        {lyricsData.map((el) => el+`\n\n`)}
      </div>
    </section>
  );
};

export default Lyrics; 