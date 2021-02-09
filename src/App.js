import React from 'react'
import AppContainer from './pages/AppContainer'
import IntlProvider from './components/IntlProvider'
import GlobalStyle from './globalStyles'

const App = () => {
  return (
    <IntlProvider>
      <GlobalStyle />
      <AppContainer />
    </IntlProvider>
  )
}

export default App
