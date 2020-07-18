//Libs
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    } 

    a {
        text-decoration: none;
    }


    html, body, #root {
        height: 100%;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background: #f8f9fa;
        font-family: 'Montserrat', sans-serif;
    }

    textarea:focus, input:focus{
        outline: none!important;
    }
`