import React, { useState } from 'react';
import './styles/app.scss';
import Song from './components/Song';
import Player from './components/Player';
import SongLists from './SongsList';

function App () {
  const [ songs, setSongs ] = useState( SongLists );
  const [ currentSong, setCurrentSong ] = useState( songs[ 2 ] );
  const [ isPlaying, setIsPlaying ] = useState( false );
  return (
    <div className="App">
      <Song currentSong={ currentSong } />
      <Player currentSong={ currentSong } isPlaying={ isPlaying } setIsPlaying={ setIsPlaying } />
    </div>
  );
}

export default App;
