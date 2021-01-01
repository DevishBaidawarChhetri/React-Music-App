import React, { useRef, useState } from 'react';
import './styles/app.scss';
import Nav from './components/Nav';
import Song from './components/Song';
import Player from './components/Player';
import SongLists from './SongsList';
import Library from './components/library/Library';

function App () {
  /* ----- Audio Ref Begins ----- */
  const audioRef = useRef( null );
  /* ----- Audio Ref Ends ----- */

  const [ songs, setSongs ] = useState( SongLists );
  const [ currentSong, setCurrentSong ] = useState( songs[ 1 ] );
  const [ isPlaying, setIsPlaying ] = useState( false );
  const [ libraryStatus, setLibraryStatus ] = useState( false );

  /* ----- Song Info State Begins ----- */
  const [ songInfo, setSongInfo ] = useState( {
    currentTime: 0,
    fullTime: 0,
    animatePercentage: 0
  } );
  /* ----- Song Info State Ends ----- */

  /* ----- Updating Time Handler Begins ----- */
  const timeUpdateHandler = ( e ) => {
    const currentTime = e.target.currentTime;
    const fullTime = e.target.duration;

    // Calculate percentage for animation
    const roundedCurrentTime = Math.round( currentTime );
    const roundedFullTime = Math.round( fullTime );
    const animation = Math.round( ( roundedCurrentTime / roundedFullTime ) * 100 ); // get time in percentage
    console.log( animation );
    setSongInfo( { ...songInfo, currentTime, fullTime, animatePercentage: animation } );
  }
  /* ----- Updating Time Handler Ends ----- */

  /* ----- Toggle Library Begins ----- */
  const toggleLibrary = () => {
    if ( toggleLibrary ) {
      setLibraryStatus( !toggleLibrary )
    }
  }
  /* ----- Toggle Library Ends ----- */

  return (
    <div className="App">
      <Nav libraryStatus={ libraryStatus } setLibraryStatus={ setLibraryStatus } />
      <Song
        currentSong={ currentSong }
        toggleLibrary={ toggleLibrary }
      />
      <Player
        audioRef={ audioRef }
        currentSong={ currentSong }
        isPlaying={ isPlaying }
        setIsPlaying={ setIsPlaying }
        songInfo={ songInfo }
        setSongInfo={ setSongInfo }
        songs={ songs }
        setCurrentSong={ setCurrentSong }
        setSongs={ setSongs }
      />
      <Library
        audioRef={ audioRef }
        songs={ songs }
        setSongs={ setSongs }
        setCurrentSong={ setCurrentSong }
        isPlaying={ isPlaying }
        libraryStatus={ libraryStatus }
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
