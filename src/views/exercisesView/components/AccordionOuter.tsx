import { useState } from 'react'
import './Accordion.css'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AccordionInner } from './AccordionInner'
import { ExercisesNavbar } from './ExercisesNavbar'



export const AccordionOuter = (props?: { title?: string, exercises?: any }) => {

  const [angle, setAngle] = useState<any>(faAngleRight)

  const displayContent = () => {
    if (angle === faAngleRight) {
      setAngle(faAngleDown)
    } else {
      setAngle(faAngleRight)
    }
  }

  const array = props?.exercises.map((exercise: any) => {
    return <AccordionInner exercises={exercise} />
  })
  const accordionOuterContent = () => {
    return angle === faAngleRight ? (<></>) : (
      <div>
        {array}
      </div>
    )
  }

  return (
    <div className='accordion-outer-wrapper'>
      <div className="accordion-outer-title-angle" onClick={() => displayContent()}>
        <h2>{props?.title}</h2>
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
