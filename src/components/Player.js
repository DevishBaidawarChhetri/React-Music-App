import React, { useState } from 'react';
import { FaStepBackward, FaPlay, FaStepForward, FaPause } from 'react-icons/fa';

const Player = ( {audioRef, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo } ) => {

  /* ----- Play Song Event Handlers Begins -----*/
  const playSongHandler = () => {
    if ( isPlaying ) {
      audioRef.current.pause();
      setIsPlaying( !isPlaying );
    } else {
      audioRef.current.play();
      setIsPlaying( !isPlaying );
    }
  }
  /* ----- Play Song Event Handlers Ends -----*/

  /* ----- Time Formatting Begins ----- */
  const getTime = ( time ) => {
    return (
      Math.floor( time / 60 ) + ':' + ( "0" + Math.floor( time % 60 ) ).slice( -2 )
    );
  };
  /* ----- Time Formatting Ends ----- */

  /* ----- Time Range Handler Begins ----- */
  const timeRangeHandler = ( e ) => {
    // console.log( e.target.value )
    audioRef.current.currentTime = e.target.value;
    setSongInfo( { ...songInfo, currentTime: e.target.value } )
  };
  /* ----- Time Range Handler Ends ----- */
  return (
    <div className="player-container">
      <div className="time-control">
        <p><strong>{ getTime( songInfo.currentTime ) }</strong></p>
        <input
          type="range"
          min={ 0 }
          max={ songInfo.fullTime }
          value={ songInfo.currentTime }
          onChange={ timeRangeHandler }
        />
        <p><strong>{ getTime( songInfo.fullTime ) }</strong></p>
      </div>
      <div className="play-control">
        <FaStepBackward className="skip-back" size="28px" />
        {
          isPlaying
            ? <FaPause className="pause" size="28px" onClick={ playSongHandler } />
            : <FaPlay className="play" size="28px" onClick={ playSongHandler } />
        }
        <FaStepForward className="skip-forward" size="28px" />
      </div>
    </div>
  )
}

export default Player 
