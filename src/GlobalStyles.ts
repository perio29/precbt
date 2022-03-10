import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
    }
    body{
        font-family: 'Lora', serif;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;