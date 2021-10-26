import { useState } from 'react'
import './Accordion.css'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AccordionInner } from './AccordionInner'
import { TechniquesNavbar } from './TechniquesNavbar'
import { TechniquesCard } from '../../views/techniquesView/components/TechniquesCard'
import { TextWrapper } from './textWrapper/TextWrapper'



export const AccordionOuter = (props: { title: string, text: any }) => {

  const [angle, setAngle] = useState<any>(faAngleRight)

  const displayContent = () => {
    if (angle === faAngleRight) {
      setAngle(faAngleDown)
    } else {
      setAngle(faAngleRight)
    }
  }

  // const array = props?.text.map((text: any, i: number) => {
  //   return <TextWrapper title="" text={text} key={i} />
  // })
  const accordionOuterContent = () => {
    return angle === faAngleRight ? (<></>) : (
      <div>
        <TextWrapper
        title=""
        text={props.text}
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
      <div className='accordion-hr' />
    </div>
  )
}
