import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
  body: "#fff",
  fontColor: "#242d31"
};

export const darkTheme = {
  body: "#242d31",
  fontColor: "#fff"
};

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${props => props.theme.body};
  }
`;