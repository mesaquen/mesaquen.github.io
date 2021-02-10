import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

h1 {
    background: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.background};
}

body {
    font-family: sans-serif;
    color: ${(props) => props.theme.color.primaryText};
    background: ${({ theme }) => theme.color.background}
}
`

export default GlobalStyle
