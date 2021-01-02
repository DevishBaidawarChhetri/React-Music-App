import React from 'react';

const Song = ( { currentSong, isPlaying, toggleLibrary } ) => {
  return (
    <div className="song-container" onClick={ toggleLibrary }>
      {/* {console.log( isPlaying ) } */ }
      <img
        className={ isPlaying ? "rotateImage" : "" }
        src={ currentSong.cover }
        alt={ currentSong.name }
        style={ {
          borderWidth: '5px',
          borderStyle: 'solid',
          borderColor:
            `${ currentSong.color[ 1 ] } 
            ${ currentSong.color[ 1 ] }
            ${ currentSong.color[ 0 ] } 
            ${ currentSong.color[ 0 ] } `,
          padding: '0.3rem'
        } }
      />
      <h2>{ currentSong.name }</h2>
      <h3>{ currentSong.artist }</h3>
    </div>
  )
}

export default Song;