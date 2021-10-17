
import './AffiliateCard.css'

import { useEffect } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../../shared/provider/LanguageProvider'


export const AffiliateCard = (props: { img: any, title: string, adress?: string, email?: string; homepage?: string, btnText: string, btnTextEng: string, btnLink?: string, instructors?: Array<any>, googleMaps: string }) => {
  const [language] = useContext(LanguageContext)


  const displayInstructors = props.instructors?.map((imgSrc, i) => {
    return (
      <div key={i}>
        <img src={imgSrc.src} key={i} alt={imgSrc.src} />
        <p >{imgSrc.name}</p>
        <p className="affiliate-card-instructor-rank">{imgSrc.rank}</p>
      </div>
    )
  })

  const emailLink = 'mailto:' + props.email

  useEffect(() => {
  }, [language])

  return (
    <div className='affiliate-card-wrapper'>
      <div className="affiliate-card-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <div className="affiliate-card-text-wrapper">
        <h2>{props.title}
        </h2>
        <div className='affiliate-card-text-info'>
          <p className="col-1">Adress:</p>
          <p className="col-2"><a href={props.googleMaps} target='blank' >{props.adress}</a></p>
          <p className="col-1">Email:</p>
          <p className="col-2"><a href={emailLink}>{props.email}</a></p>
          <p className="col-1">Hemsida:</p>
          <p className="col-2"><a href={props.homepage} target='blank' >{props.homepage}</a></p>
        </div>
        <div className="affiliate-card-instructors-wrapper">
          {displayInstructors}
        </div>
      </div>
    </div>
  )
}
