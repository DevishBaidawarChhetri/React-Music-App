export const playAudio = ( isPlaying, audioRef ) => {
  if ( isPlaying ) {
    const playPromise = audioRef.current.play(); // to check if audio is actually loaded or not
    if ( playPromise !== undefined ) { // if audio is not loaded
      playPromise.then( () => { // waits for song to load
        audioRef.current.play(); // and then plays the song
      } );
    }
  }
}