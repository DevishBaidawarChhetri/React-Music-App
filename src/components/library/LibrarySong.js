import React from 'react';

const LibrarySong = ( { id, audioRef, allSongs, song, setSongs, setCurrentSong, isPlaying } ) => {
  const songSelectHandler = async () => {
    await setCurrentSong( song );
    const newSongs = allSongs.map( ( song ) => {
      if ( song.id === id ) {
        return { ...song, active: true }
      } else {
        return { ...song, active: false }
      }
    } );
    setSongs( newSongs );
    if ( isPlaying ) audioRef.current.play();
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