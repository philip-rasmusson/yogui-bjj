import './DefaultSectionOneMobileExternalLink.css'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useEffect } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../provider/LanguageProvider'


export const DefaultSectionOneMobileExternalLink = (props: { img: any, title: string, titleEng: string, text: string, textEng: string, btnText: string, btnTextEng: string, btnLink?: string }) => {
  
  const [language] = useContext(LanguageContext)

  useEffect(() => {
  }, [language])

  return (
    <div className='default-section-one-external-link-mobile-wrapper font-black'>
      <h2>
        <SelectLanguage
          textSwe={props.title}
          textEng={props.titleEng}
        />
      </h2>
      <div className="default-section-one-external-link-mobile-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <p><SelectLanguage
        textSwe={props.text}
        textEng={props.textEng}
      /></p>
      <button className="bg-color-black font-white box-shadow" onClick={() => window.open(props.btnLink)} ><SelectLanguage
        textSwe={props.btnText}
        textEng={props.btnTextEng}
      /></button>
    </div>
  )
}
