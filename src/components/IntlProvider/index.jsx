import React, { useContext, useEffect, useState } from 'react'
import { IntlProvider as Provider } from 'react-intl'
import { DEFAULT_LOCALE, LANGUAGES } from '../../Constants'
import enUS from 'lang/en-US.json'
import ptBR from 'lang/pt-BR.json'
import LanguageContext from 'context/LanguageContext'

const IntlProvider = ({ children }) => {
  const { language } = useContext(LanguageContext)
  const [messages, setMessages] = useState(enUS)

  useEffect(() => {
    const nextMessages = language === LANGUAGES['en-US'] ? enUS : ptBR
    setMessages(nextMessages)
  }, [language])

  return (
    <Provider
      locale={DEFAULT_LOCALE}
      defaultLocale={DEFAULT_LOCALE}
      messages={messages}
    >
      {children}
    </Provider>
  )
}

export default IntlProvider
