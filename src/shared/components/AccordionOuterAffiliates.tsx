import { useState } from 'react'
import './Accordion.css'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { AccordionInner } from './AccordionInner'
// import { TechniquesNavbar } from './TechniquesNavbar'
// import { TechniquesCard } from '../../views/techniquesView/components/TechniquesCard'
import { TextWrapper } from './textWrapper/TextWrapper'
import { AffiliateCard } from '../../views/affiliatesView/components/AffiliateCard'



export const AccordionOuterAffiliates = (props: { img: any, title: string, adress?: string, email?: string; homepage?: string, btnText: string, btnTextEng: string, btnLink?: string, instructors?: Array<any>, googleMaps: string }) => {

  const [angle, setAngle] = useState<any>(faAngleRight)

  const displayContent = () => {
    if (angle === faAngleRight) {
      setAngle(faAngleDown)
    } else {
      setAngle(faAngleRight)
    }
  }

  const accordionOuterContent = () => {
    return angle === faAngleRight ? (<></>) : (
      <div>
        <AffiliateCard
          title={props.title}
          adress={props.adress}
          email={props.email}
          homepage={props.homepage}
          btnText={props.btnText}
          btnTextEng={props.btnTextEng}
          img={props.img}
          instructors={props.instructors}
          googleMaps={props.googleMaps}
        />
      </div>
    )
  }

  return (
    <div className='accordion-outer-wrapper'>
      <div className="accordion-outer-title-angle" onClick={() => displayContent()}>
        <h2>{props.title}</h2>
        <div className='accordion-outer-angle-icon'>
          <FontAwesomeIcon icon={angle} />
        </div>
      </div>
      <div className='accordion-outer-content'>
        {accordionOuterContent()}
      </div>
    </div>
  )
}
