import './DefaultSectionOneMobile.css'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'


export const DefaultSectionOneMobile = (props: { img: any, title: string, titleEng: string, text: string, textEng: string, btnText: string, btnTextEng: string, btnLink?: string }) => {
  const [language] = useContext(LanguageContext)



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
      <button className="bg-color-black font-white box-shadow"><SelectLanguage
        textSwe={props.btnText}
        textEng={props.btnTextEng}
      /></button>
    </div>
  )
}
