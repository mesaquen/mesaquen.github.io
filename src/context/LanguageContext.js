import React, { useState } from 'react'
import { DEFAULT_LOCALE } from 'Constants'

const LanguageContext = React.createContext(DEFAULT_LOCALE)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(DEFAULT_LOCALE)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
