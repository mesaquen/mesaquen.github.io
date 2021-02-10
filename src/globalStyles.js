import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: sans-serif;
    color: ${(props) => props.theme.color.primaryText};
    background: ${({ theme }) => theme.color.background}
}
`

export default GlobalStyle
