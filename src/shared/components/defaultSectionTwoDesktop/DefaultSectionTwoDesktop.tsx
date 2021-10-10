import './DefaultSectionTwoDesktop.css'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useContext, useEffect } from 'react'
import { LanguageContext } from '../../provider/LanguageProvider'


export const DefaultSectionTwoDesktop = (props: { img: any, title: string, titleEng: string, subtitle: string, text: string, textEng: string, text2: string, text2Eng: string }) => {
  const [language] = useContext(LanguageContext)

  useEffect(() => {
  }, [language])


  return (
    <div className='default-section-two-desktop-wrapper font-black'>
      <h2>
        <SelectLanguage
          textSwe={props.title}
          textEng={props.titleEng}
        />
      </h2>
      <div className="default-section-two-desktop-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <div className="default-section-two-desktop-text-wrapper">
        <h3>
          {props.subtitle}
        </h3>
        <p><SelectLanguage
          textSwe={props.text}
          textEng={props.textEng}
        /></p>
        <p><SelectLanguage
          textSwe={props.text2}
          textEng={props.text2Eng}
        /></p>
      </div>
    </div>
  )
}
