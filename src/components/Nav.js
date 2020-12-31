import React from 'react';
import { FaCompactDisc } from 'react-icons/fa';

const Nav = ( { libraryStatus, setLibraryStatus } ) => {
  return (
    <nav className="nav">
      <h1>Music Player</h1>
      <button onClick={ () => setLibraryStatus( !libraryStatus ) }>
        Library
        <FaCompactDisc style={ { margin: '0px 0px -4px 10px' } } size="20px" />
      </button>
    </nav>
  )
}

export default Nav;
