import React from 'react';
import {playAudio} from '../../util';

const LibrarySong = ( { id, audioRef, allSongs, song, setSongs, setCurrentSong, isPlaying } ) => {
  const songSelectHandler = () => {
    setCurrentSong( song );
    // Add Active State
    const newSongs = allSongs.map( ( song ) => {
      if ( song.id === id ) {
        return { ...song, active: true }
      } else {
        return { ...song, active: false }
      }
    } );
    setSongs( newSongs );
    playAudio(isPlaying, audioRef);
  };

  return (
    <div className={ `library-song ${ song.active ? 'active' : "" }` } onClick={ songSelectHandler } >
      <img src={ song.cover } alt={ song.name } />
      <div className="song-description">
        <h3>{ song.name }</h3>
        <h4>{ song.artist }</h4>
      </div>
    </div>
  )
}

export default LibrarySong;