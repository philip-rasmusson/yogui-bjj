
import './AffiliateCard.css'

import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'


export const AffiliateCard = (props: { img: any, title: string, titleEng: string, text: string, textEng: string, btnText: string, btnTextEng: string, btnLink?: string }) => {
  const [language] = useContext(LanguageContext)


  useEffect(() => {
  }, [language])


  return (
    <div className='affiliate-card-wrapper font-black'>
      <h2>
        <SelectLanguage
          textSwe={props.title}
          textEng={props.titleEng}
        />
      </h2>
      <div className="affiliate-card-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <div className="affiliate-card-text-wrapper">

        <p><SelectLanguage
          textSwe={props.text}
          textEng={props.textEng}
        /></p>
        <button className="bg-color-black font-white box-shadow"><SelectLanguage
          textSwe={props.btnText}
          textEng={props.btnTextEng}
        /></button>
      </div>
    </div>
  )
}
