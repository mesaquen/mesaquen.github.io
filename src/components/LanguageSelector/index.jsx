import React, { useContext } from 'react'
import LanguageContext from 'context/LanguageContext'

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext)

  const defineLanguage = (locale) => setLanguage(locale)

  const setEn = () => defineLanguage('en-US')
  const setPt = () => defineLanguage('pt-BR')

  console.log(language)

  return (
    <div>
      <button onClick={setEn}>en</button>
      <button onClick={setPt}>pt</button>
    </div>
  )
}

export default LanguageSelector
