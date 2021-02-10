import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: sans-serif;
    color: ${props => props.theme.color.primaryText};
    background: #333
}
`

export default GlobalStyle
