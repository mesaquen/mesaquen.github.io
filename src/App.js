import React from 'react'
import AppContainer from './pages/AppContainer'
import IntlProvider from './components/IntlProvider'
import GlobalStyle from './globalStyles'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import { LanguageProvider } from 'context/LanguageContext'
import ReactGA from 'react-ga'

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('G-H711591LPV')
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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
