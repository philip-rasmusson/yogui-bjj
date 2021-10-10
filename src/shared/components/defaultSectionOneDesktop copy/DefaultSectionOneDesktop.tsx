import './DefaultSectionOneDesktop.css'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { LanguageContext } from '../../provider/LanguageProvider'


export const DefaultSectionOneDesktop = (props: { img: any, title: string, titleEng: string, text: string, textEng: string, btnText: string, btnTextEng: string, btnLink: string }) => {
  const [language] = useContext(LanguageContext)

  const history = useHistory()

  useEffect(() => {
  }, [language])


  return (
    <div className='default-section-one-desktop-wrapper font-black'>
      <h2>
        <SelectLanguage
          textSwe={props.title}
          textEng={props.titleEng}
        />
      </h2>
      <div className="default-section-one-desktop-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <div className="default-section-one-desktop-text-wrapper">

        <p><SelectLanguage
          textSwe={props.text}
          textEng={props.textEng}
        /></p>
        <button className="bg-color-black font-white box-shadow" onClick={() => history.push(props.btnLink)}><SelectLanguage
          textSwe={props.btnText}
          textEng={props.btnTextEng}
        /></button>
      </div>
    </div>
  )
}
