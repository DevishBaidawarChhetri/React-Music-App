import React from 'react';
import styled from 'styled-components';

const Switch = ( { themeToggler } ) => {
  return (
    <StyledSwitch>
      <label className="switch">
        <input type="checkbox" onChange={ themeToggler } />
        <span className="slider" />
      </label>
    </StyledSwitch>
  )
}
const StyledSwitch = styled.div`
  margin: 5px 0 0 17px;
  .switch{
    position: absolute;
    display: inline-block;
    width: 56px;
    height: 32px;
    border-radius: 20px;
    border: 2px solid ${ props => props.theme.fontColor };
  }
  .switch input{
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 0.4s;
    border-radius: 20px;
  }
  .slider:before{
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 6px;
    bottom: 4px;
    background-color: ${ props => props.theme.fontColor };
    transition: 0.4s;
    border-radius: 20px;
  }
  input:checked + .slider:before{
    transform: translateX(20px);
  }
`;
export default Switch;
