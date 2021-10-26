import { useState } from 'react'
import './Accordion.css'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../../shared/img/techniques/default.png'
import imgDefault from '../img/techniques/positions/mount.png'
// import imgDefault from '../shared/img/techniques/positions/mount.png'
import exercises from '../../shared/data/Exercises'

export const AccordionInner = (props: { textValue: any, key: number }) => {
  const [angleInner, setAngleInner] = useState<any>(faAngleRight)

  const displayContentInner = () => {
    if (angleInner === faAngleRight) {
      setAngleInner(faAngleDown)
    } else {
      setAngleInner(faAngleRight)
    }
  }


  const accordionInnerContent = () => {
    if (angleInner === faAngleRight) {
      return <></>
    } else {
      return (
        <div>
          <p><strong>{props?.textValue.text}</strong></p> <br />
          {/* {displayExerciseSteps({props.exercises.text})} */}
          <br />
          <img src={props.textValue.img} alt="" style={{ width: '80vw', margin: '2rem 0' }} />
          <img src={imgDefault} alt="" style={{ width: '80vw', margin: '2rem 0' }} />
        </div>
      )
    }
  }

  return (
    <>
      <div className='accordion-outer-exercises-wrapper' onClick={() => displayContentInner()}>
        <h4 className='accordion-outer-exercises-title'>{props?.textValue.technique}</h4>
        <div className='accordion-outer-angle-icon-inner grid-center-content'>
          <FontAwesomeIcon icon={angleInner} />
        </div>
      </div>
      {accordionInnerContent()}
    </>)

}
