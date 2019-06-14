import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
   body {
     margin: 0;
     font-family: "Noto Sans HK", sans-serif;
     background: ${props => props.theme.bg};
     color: ${props => props.theme.color};
   }
`;

export default GlobalStyle;
