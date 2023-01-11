import React from "react";
import { lyricsData } from "../data/lyricsData";

function RandomLyrics(){

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  }

  return (
    <div id="list-lyrics">
      <p>{lyricsData[getRandomIndex(lyricsData.length)]}</p>
    </div>
  );
}

export default RandomLyrics;