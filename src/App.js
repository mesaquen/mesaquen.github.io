import React from 'react'
import AppContainer from './pages/AppContainer'
import IntlProvider from './components/IntlProvider'
import GlobalStyle from './globalStyles'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>

    <IntlProvider>
      <GlobalStyle />
      <AppContainer />
    </IntlProvider>
    </ThemeProvider>
  )
}

export default App
