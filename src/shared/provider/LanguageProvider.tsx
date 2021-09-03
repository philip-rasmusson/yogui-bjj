import { useState, createContext } from 'react'

export const LanguageContext = createContext<any>('')

export const Provider = (props: { children?: React.ReactChild }) => {

  const [language, setLanguage] = useState(LanguageContext)

  return (<LanguageContext.Provider
    value={[language, setLanguage]}>
    {props.children}
  </LanguageContext.Provider>)
}