import React from 'react';
import styled from 'styled-components';
import { FaCompactDisc } from 'react-icons/fa';
import Switch from './Switch';


const Nav = ( { libraryStatus, setLibraryStatus, themeToggler } ) => {
  return (
    <nav className="nav">
      <h1>Music Player</h1>
      <StyledBtns className="btns">
        <button className={ libraryStatus ? "nav-active" : "" } onClick={ () => setLibraryStatus( !libraryStatus ) }>
          Library
        <FaCompactDisc style={ { margin: '0px 0px -4px 10px' } } size="20px" />
        </button>
        <Switch themeToggler={ themeToggler } />
      </StyledBtns>
    </nav>
  )
}
const StyledBtns = styled.div`
  z-index: 9999;
`;
export default Nav;
