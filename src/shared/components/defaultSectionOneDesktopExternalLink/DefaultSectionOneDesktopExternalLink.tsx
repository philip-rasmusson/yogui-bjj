import './DefaultSectionOneDesktopExternalLink.css'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useContext, useEffect } from 'react'
import { LanguageContext } from '../../provider/LanguageProvider'


export const DefaultSectionOneDesktopExternalLink = (props: { img: any, title: string, titleEng: string, text: string, textEng: string, btnText: string, btnTextEng: string, btnLink: string }) => {
  const [language] = useContext(LanguageContext)


  useEffect(() => {
  }, [language])


  return (
    <div className='default-section-one-external-link-desktop-wrapper font-black'>
      <h2>
        <SelectLanguage
          textSwe={props.title}
          textEng={props.titleEng}
        />
      </h2>
      <div className="default-section-one-external-link-desktop-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <div className="default-section-one-external-link-desktop-text-wrapper">

        <p><SelectLanguage
          textSwe={props.text}
          textEng={props.textEng}
        /></p>
        <button className="bg-color-black font-white box-shadow"><a href={props.btnLink} target='_blank'><SelectLanguage
          textSwe={props.btnText}
          textEng={props.btnTextEng}
        /></a></button>
      </div>
    </div>
  )
}
