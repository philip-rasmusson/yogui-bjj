import './DefaultSectionOneMobile.css'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'


export const DefaultSectionOneMobile = (props: { img: any, title: string, text: string, btnText: string, btnLink: string }) => {
  const [language] = useContext(LanguageContext)


  useEffect(() => {
  }, [language])

  return (
    <div className='default-section-one-mobile-wrapper font-black'>
      <h2>{props.title}</h2>
      <div className="default-section-one-mobile-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <p>{props.text}</p>
      <button className="bg-color-black font-white box-shadow">{props.btnText}</button>
    </div>
  )
}
