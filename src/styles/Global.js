import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
   body {
     margin: 0;
     background: ${(props) => props.theme.bg};
     font-family: "Noto Sans HK", sans-serif;
     color: ${(props) => props.theme.color};
   }
`;

export default GlobalStyle;
