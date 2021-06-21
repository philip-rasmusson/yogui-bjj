import { useState } from 'react'
import './Accordion.css'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const AccordionOuter = (props?: { title?: string }) => {

  const [angle, setAngle] = useState<any>(faAngleRight)

  return (
    <div className='accordion-outer-wrapper'>
      <div className="accordion-outer-title-angle">
        <h2>{props?.title}</h2>
        <div className='accordion-outer-angle-icon'>
          <FontAwesomeIcon icon={angle} />
        </div>
      </div>
      <div className='accordion-hr' />
    </div>
  )
}
