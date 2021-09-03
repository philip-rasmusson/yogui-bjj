import './DefaultSectionOneDesktop.css'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'


export const DefaultSectionOneDesktop = (props: { img: any, title: string, titleEng?: string, text: string, textEng?: string, btnText: string, btnTextEng?: string, btnLink: string }) => {
  const [language] = useContext(LanguageContext)


  useEffect(() => {
  }, [language])
  return (
    <div className='default-section-one-desktop-wrapper font-black'>
      <h2>
        <SelectLanguage
          textSwe={props.title}
          textEng={props.title}
        />
      </h2>
      <div className="default-section-one-desktop-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <p>{props.text}</p>
      <button className="bg-color-black font-white box-shadow">{props.btnText}</button>
    </div>
  )
}
