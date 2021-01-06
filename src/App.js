import React, { useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
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
  const [ theme, setTheme ] = useState( "light" );

  /* ----- Song Info State Begins ----- */
  const [ songInfo, setSongInfo ] = useState( {
    currentTime: 0,
    fullTime: 0,
    animatePercentage: 0
  } );
  /* ----- Song Info State Ends ----- */

  /* ----- Theme Begins ----- */

  const themeToggler = () => {
    theme === "light" ? setTheme( "dark" ) : setTheme( "light" );
  }

  /* ----- Theme Ends ----- */

  /* ----- Updating Time Handler Begins ----- */
  const timeUpdateHandler = ( e ) => {
    const currentTime = e.target.currentTime;
    const fullTime = e.target.duration;

    // Calculate percentage for animation
    const roundedCurrentTime = Math.round( currentTime );
    const roundedFullTime = Math.round( fullTime );
    const animation = Math.round( ( roundedCurrentTime / roundedFullTime ) * 100 ); // get time in percentage
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

  /* ----- Song End Handler Begins ----- */
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex( ( song ) => song.id === currentSong.id );
    await setCurrentSong( songs[ ( currentIndex + 1 ) % songs.length ] );
    if ( isPlaying )
      audioRef.current.play();
  }
  /* ----- Song End Handler Ends ----- */
  return (
    <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme }>
      <GlobalStyles />
      <StyledApp className={ `App ${ libraryStatus ? 'library-active' : '' }` }>
        <Nav libraryStatus={ libraryStatus } setLibraryStatus={ setLibraryStatus } themeToggler={ themeToggler } />
        <div className="player-wrapper">
          <div className="player">
            <Song
              currentSong={ currentSong }
              isPlaying={ isPlaying }
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
          </div>
        </div>
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
          onEnded={ songEndHandler }
        ></audio>
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  color: ${ props => props.theme.fontColor };
  h1, h2, h3, button{
    color: ${ props => props.theme.fontColor };
  }
  button{
    border: 2px solid ${ props => props.theme.fontColor };
  }
`;

export default App;
