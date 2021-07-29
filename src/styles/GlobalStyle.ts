import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        @keyframes initialFade {
            from {
                opacity: 0.3;
            }
            to {
                opacity: 1;
            }
        }
        animation: initialFade .6s ease-in-out; 
    }

    body, 
    input, 
    button, 
    textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    .App {
        height: 100vh;
        display: flex;
        
        
    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }
`
export default GlobalStyle