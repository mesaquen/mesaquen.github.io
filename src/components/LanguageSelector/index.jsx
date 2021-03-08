import React, { useContext } from 'react'
import LanguageContext from 'context/LanguageContext'
import ReactGA from 'react-ga'
import { LANGUAGES } from 'Constants'
import { Button } from './styles'

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  const languages = Object.keys(LANGUAGES)

  const defineLanguage = (locale) => {
    setLanguage(locale)
    if (process.env.NODE_ENV === 'production') {
      ReactGA.event({
        category: 'User',
        action: 'Toggle Language',
        value: locale
      })
    }
  }

  const renderButton = (key) => {
    const value = LANGUAGES[key]
    return (
      <Button
        key={key}
        onClick={() => defineLanguage(value)}
        active={value === language}
      >
        {value}
      </Button>
    )
  }

  return <div>{languages.map(renderButton)}</div>
}

export default LanguageSelector
