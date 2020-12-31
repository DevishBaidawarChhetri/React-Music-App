import React, { useRef, useState } from 'react';
import './styles/app.scss';
import Song from './components/Song';
import Player from './components/Player';
import SongLists from './SongsList';
import Library from './components/library/Library';

function App () {
  /* ----- Audio Ref Begins ----- */
  const audioRef = useRef( null );
  /* ----- Audio Ref Ends ----- */

  const [ songs, setSongs ] = useState( SongLists );
  const [ currentSong, setCurrentSong ] = useState( songs[ 0 ] );
  const [ isPlaying, setIsPlaying ] = useState( false );

  /* ----- Song Info State Begins ----- */
  const [ songInfo, setSongInfo ] = useState( {
    currentTime: 0,
    fullTime: 0
  } );
  /* ----- Song Info State Ends ----- */

  /* ----- Updating Time Handler Begins ----- */
  const timeUpdateHandler = ( e ) => {
    // console.log( e );
    const currentTime = e.target.currentTime;
    const fullTime = e.target.duration;
    setSongInfo( { ...songInfo, currentTime, fullTime } );
  }
  /* ----- Updating Time Handler Ends ----- */

  return (
    <div className="App">
      <Song currentSong={ currentSong } />
      <Player
        audioRef={ audioRef }
        currentSong={ currentSong }
        isPlaying={ isPlaying }
        setIsPlaying={ setIsPlaying }
        songInfo={ songInfo }
        setSongInfo={ setSongInfo }
      />
      <Library
        audioRef={ audioRef }
        songs={ songs }
        setSongs={ setSongs }
        setCurrentSong={ setCurrentSong }
        isPlaying={ isPlaying }
      />
      <audio
        src={ currentSong.audio }
        ref={ audioRef }
        onTimeUpdate={ timeUpdateHandler }
        onLoadedMetadata={ timeUpdateHandler }
      ></audio>
    </div>
  );
}

export default App;
