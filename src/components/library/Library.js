import React from 'react';
import styled from 'styled-components';
import LibrarySong from './LibrarySong';

const Library = ( { audioRef, songs, setSongs, setCurrentSong, isPlaying, libraryStatus } ) => {
  return (
    <Styledlibrary className={ `library ${ libraryStatus ? 'active-library' : '' }` }>
      <h2>Library</h2>
      <div className="library-songs">
        {
          songs.map( ( song ) => (
            <LibrarySong
              id={ song.id }
              allSongs={ songs }
              song={ song }
              setSongs={ setSongs }
              setCurrentSong={ setCurrentSong }
              key={ song.id }
              audioRef={ audioRef }
              isPlaying={ isPlaying }
            />
          ) )
        }
      </div>
    </Styledlibrary>
  )
}
const Styledlibrary = styled.div`
  color: ${ props => props.theme.body };
  background-color: ${ props => props.theme.body };
`;
export default Library;
