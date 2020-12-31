import React from 'react';
import { FaStepBackward, FaPlay, FaStepForward } from 'react-icons/fa';

const Player = () => {
  return (
    <div className="player-container">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FaStepBackward className="skip-back" size="28px" />
        <FaPlay className="play" size="28px" />
        <FaStepForward className="skip-forward" size="28px" />
      </div>
    </div>
  )
}

export default Player 
