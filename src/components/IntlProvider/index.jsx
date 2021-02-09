import React from 'react'
import { IntlProvider as Provider } from 'react-intl'
import { DEFAULT_LOCALE } from '../../Constants'
import enUS from '../../lang/en-US.json'

const IntlProvider = ({ children }) => {
  return (
    <Provider
      locale={DEFAULT_LOCALE}
      defaultLocale={DEFAULT_LOCALE}
      messages={enUS}
    >
      {children}
    </Provider>
  )
}

export default IntlProvider
