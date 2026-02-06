import React from "react";
import songImg from "./library/song.png";

const Song = ({ currentSong, isPlaying, toggleLibrary }) => {
  const addDefaultSrc = (e) => {
    e.target.src = songImg;
  };

  return (
    <div className="song-container" onClick={toggleLibrary}>
      {/* {console.log( isPlaying ) } */}
      <img
        className={isPlaying ? "rotateImage" : ""}
        src={currentSong.cover}
        alt={currentSong.name}
        style={{
          borderWidth: "5px",
          borderStyle: "solid",
          borderColor: `${currentSong.color[1]} 
            ${currentSong.color[1]}
            ${currentSong.color[0]} 
            ${currentSong.color[0]} `,
          padding: "0.3rem",
        }}
        onError={addDefaultSrc}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
