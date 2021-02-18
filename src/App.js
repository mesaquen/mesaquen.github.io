import React from 'react'
import AppContainer from './pages/AppContainer'
import IntlProvider from './components/IntlProvider'
import GlobalStyle from './globalStyles'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import { LanguageProvider } from 'context/LanguageContext'

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <IntlProvider>
          <GlobalStyle />
          <AppContainer />
        </IntlProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
