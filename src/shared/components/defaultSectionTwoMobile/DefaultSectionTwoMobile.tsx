import './DefaultSectionTwoMobile.css'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../provider/LanguageProvider'


export const DefaultSectionTwoMobile = (props: { img: any, title: string, titleEng: string, text: string, textEng: string }) => {
  const [language] = useContext(LanguageContext)



  useEffect(() => {
  }, [language])

  return (
    <div className='default-section-two-mobile-wrapper font-black'>
      <h2>
        <SelectLanguage
          textSwe={props.title}
          textEng={props.titleEng}
        />
      </h2>
      <div className="default-section-two-mobile-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <p><SelectLanguage
        textSwe={props.text}
        textEng={props.textEng}
      /></p>

    </div>
  )
}
