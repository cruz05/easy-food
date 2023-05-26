import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
}

* {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
}

img{
    width: 100%
}

body { 
    font-size: 1.6rem;
}

body::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.2rem;
}

body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
    background-color: gray;
}
`
