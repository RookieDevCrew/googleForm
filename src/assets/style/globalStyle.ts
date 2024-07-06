import { createGlobalStyle } from "styled-components";
 
const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        font-family: "Google Sans", Roboto, Arial, sans-serif !important;
    }

    html {
        // font-size:$font-size-16;
    }

    body {
        color: $primary;
    }

    h1 {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,input,select,textarea {
        background-color: transparent;
        border: 0;
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }

    a,button {
        cursor: pointer;
    }

    button {
        padding: 0;
    }

    ul,ol {
        padding-left: 0;
        list-style: none;
    }
    address {
        font-style: normal;
    }
    svg{
        color: #5f6368;
        fill: currentColor;
    }
`;
 
export default GlobalStyles;