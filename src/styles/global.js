import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
   body {
     margin: 0;
     font-family: "Noto Sans HK", sans-serif;
     background: ${props => props.theme.bg};
     color: ${props => props.theme.color};
   }
`;
