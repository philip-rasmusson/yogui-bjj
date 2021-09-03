import { useContext } from 'react'
import { LanguageContext } from '../shared/provider/LanguageProvider'

export const SelectLanguage = (props: { textEng: string, textSwe: string }) => {

  const [language] = useContext(LanguageContext)

  return language === 'english'
    ? <>{props.textEng}</>
    : <>{props.textSwe}</>
}
