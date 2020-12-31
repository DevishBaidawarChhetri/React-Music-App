import React, { useRef, useState } from 'react';
import { FaStepBackward, FaPlay, FaStepForward, FaPause } from 'react-icons/fa';

const Player = ( { currentSong, isPlaying, setIsPlaying } ) => {
  /* ----- Audio Ref Begins ----- */
  const audioRef = useRef( null );
  /* ----- Audio Ref Ends ----- */

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

  /* ----- Song Info State Begins ----- */
  const [ songInfo, setSongInfo ] = useState( {
    currentTime: 0,
    fullTime: 0
  } );
  /* ----- Song Info State Ends ----- */

  /* ----- Updating Time Begins ----- */
  const timeUpdateHandler = ( e ) => {
    // console.log( e );
    const currentTime = e.target.currentTime;
    const fullTime = e.target.duration;
    setSongInfo( { ...songInfo, currentTime, fullTime } );
  }
  /* ----- Updating Time Ends ----- */

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
      <audio
        src={ currentSong.audio }
        ref={ audioRef }
        onTimeUpdate={ timeUpdateHandler }
        onLoadedMetadata={ timeUpdateHandler }
      ></audio>
    </div>
  )
}

export default Player 
