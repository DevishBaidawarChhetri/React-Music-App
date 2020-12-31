import React from 'react';

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
    if ( isPlaying ) {
      const playPromise = audioRef.current.play(); // to check if audio is actually loaded or not
      if ( playPromise !== undefined ) { // if audio is not loaded
        playPromise.then( () => { // waits for song to load
          audioRef.current.play(); // and then plays the song
        } );
      }
    }
  };
  
  return (
    <div className={ `library-song ${ song.active ? 'selected' : "" }` } onClick={ songSelectHandler } >
      <img src={ song.cover } alt={ song.name } />
      <div className="song-description">
        <h3>{ song.name }</h3>
        <h4>{ song.artist }</h4>
      </div>
    </div>
  )
}

export default LibrarySong;