import './DefaultSectionOneMobile.css'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useEffect } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'
import { useHistory } from 'react-router'


export const DefaultSectionOneMobile = (props: { img: any, title: string, titleEng: string, text: string, textEng: string, btnText: string, btnTextEng: string, btnLink: string }) => {
  const [language] = useContext(LanguageContext)

  const history = useHistory()

  const toggleNavbar = () => {
    window.scrollTo(0, 0)
  }

  const linkFunction = (link: string) => {
    history.push(link)
    toggleNavbar()
  }

  useEffect(() => {
  }, [language])

  return (
    <div className='default-section-one-mobile-wrapper font-black'>
      <h2>
        <SelectLanguage
          textSwe={props.title}
          textEng={props.titleEng}
        />
      </h2>
      <div className="default-section-one-mobile-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <p><SelectLanguage
        textSwe={props.text}
        textEng={props.textEng}
      /></p>
      <button className="bg-color-black font-white box-shadow" onClick={() => linkFunction(props.btnLink)}><SelectLanguage
        textSwe={props.btnText}
        textEng={props.btnTextEng}
      /></button>
    </div>
  )
}
