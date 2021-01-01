import React from 'react';
import { FaStepBackward, FaPlay, FaStepForward, FaPause } from 'react-icons/fa';

const Player = ( { audioRef, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo, songs, setCurrentSong, setSongs } ) => {

  const activeLibraryHandler = ( index ) => {
    const newSongs = songs.map( ( song ) => {
      if ( song.id === index.id ) {
        return { ...song, active: true }
      } else {
        return { ...song, active: false }
      }
    } );
    setSongs( newSongs );
  }

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

  /* ----- Skip Track Handler Begins ----- */
  const skipTrackHandler = async ( direction ) => {
    let currentIndex = songs.findIndex( ( song ) => song.id === currentSong.id );
    if ( direction === "skipBackwards" ) {
      if ( ( currentIndex - 1 ) % songs.length === -1 ) {
        await setCurrentSong( songs[ ( songs.length - 1 ) ] );
        activeLibraryHandler( songs[ ( songs.length - 1 ) ] );
        if ( isPlaying ) audioRef.current.play();
        return;
      }
      await setCurrentSong( songs[ ( currentIndex - 1 ) % songs.length ] );
      activeLibraryHandler( songs[ ( currentIndex - 1 ) % songs.length ] );
    }
    if ( direction === "skipForward" ) {
      await setCurrentSong( songs[ ( currentIndex + 1 ) % songs.length ] );
      activeLibraryHandler( songs[ ( currentIndex + 1 ) % songs.length ] )
    }
    if ( isPlaying ) audioRef.current.play();
  }
  /* ----- Skip Track Handler Ends ----- */

  /* Adding Styles for Animation Begins */
  const trackAnimation = {
    transform: `translateX(${ songInfo.animatePercentage }%)`
  }
  /* Adding Styles for Animation Begins */

  return (
    <div className="player-container" >
      <div className="time-control">
        <p><strong>{ getTime( songInfo.currentTime ) }</strong></p>
        <div className="track"
          style={ {
            background:
              `
                linear-gradient(to right, 
                ${ currentSong.color[ 0 ] }, 
                ${ currentSong.color[ 1 ] })
                `
          } }
        >
          <input
            type="range"
            min={ 0 }
            max={ songInfo.fullTime || 0 }
            value={ songInfo.currentTime }
            onChange={ timeRangeHandler }
          />
          <div className="animate-track" style={ trackAnimation }></div>
        </div>
        <p><strong>{ songInfo.fullTime ? getTime( songInfo.fullTime ) : "0:00" }</strong></p>
      </div>
      <div className="play-control">
        <FaStepBackward
          className="skip-back"
          size="28px"
          onClick={ () => skipTrackHandler( 'skipBackwards' ) }
        />
        {
          isPlaying
            ? <FaPause className="pause" size="28px" onClick={ playSongHandler } />
            : <FaPlay className="play" size="28px" onClick={ playSongHandler } />
        }
        <FaStepForward
          className="skip-forward"
          size="28px"
          onClick={ () => skipTrackHandler( 'skipForward' ) }
        />
      </div>
    </div>
  )
}
export default Player;
