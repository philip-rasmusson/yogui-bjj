
import './AffiliateCard.css'

import { SelectLanguage } from '../../../functions/SelectLanguage'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'


export const AffiliateCard = (props: { img: any, title: string, adress?: string, email?: string; homepage?: string, btnText: string, btnTextEng: string, btnLink?: string, instructors?: Array<any>, border: string }) => {
  const [language] = useContext(LanguageContext)

  // const displayInstructors = () => {
  //   return <img src={props.instructors} />
  // }
  const displayInstructors = props.instructors?.map((imgSrc, i) => {
    return (
      <div>
        <img src={imgSrc.src} key={i} alt={imgSrc.src} style={{ border: props.border }} />
        <p>{imgSrc.name}</p>
        <p className="affiliate-card-instructor-rank">{imgSrc.rank}</p>
      </div>
    )
  })

  useEffect(() => {
  }, [language])

  return (
    <div className='affiliate-card-wrapper'>
      <div className="affiliate-card-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
        {/* <button className="bg-color-black font-white box-shadow"><SelectLanguage
          textSwe={props.btnText}
          textEng={props.btnTextEng}
        /></button> */}
      </div>
      <div className="affiliate-card-text-wrapper">
        <h2>{props.title}
        </h2>
        <div className='affiliate-card-text-info'>
          <p className="col-1">Adress:</p>
          <p className="col-2">{props.adress}</p>
          <p className="col-1">Email:</p>
          <p className="col-2">{props.email}</p>
          <p className="col-1">Hemsida:</p>
          <p className="col-2">{props.homepage}</p>
        </div>
        <div className="affiliate-card-instructors-wrapper">
          {displayInstructors}
        </div>
      </div>
    </div>
  )
}
