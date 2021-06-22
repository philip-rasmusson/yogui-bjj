import { useState } from 'react'
import './Accordion.css'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../../../shared/img/workout_imgs/chest/dumbell-fly.png'
import imgDefault from '../../../shared/img/workout_imgs/default.jpeg'
import exercises from '../../../shared/data/Exercises'

export const AccordionInner = (props?: { exercises?: any }) => {
  const [angleInner, setAngleInner] = useState<any>(faAngleRight)

  const displayContentInner = () => {
    if (angleInner === faAngleRight) {
      setAngleInner(faAngleDown)
    } else {
      setAngleInner(faAngleRight)
    }
  }

  const displayExerciseSteps = (steps: any) => {
    let count = 0
    const xArr = steps.map((element: any) => {
      count += 1
      return <div> <div>{count}. {element}</div><br /></div>
    })
    return xArr
  }

  const accordionInnerContent = () => {
    if (angleInner === faAngleRight) {
      return <></>
    } else {
      return props?.exercises === 'hantelfly' ?
        (
          <div>
            <p><strong> {exercises.dumbbellFly.description}</strong></p> <br />
            {displayExerciseSteps((exercises.dumbbellFly.steps))}
            <br />
            <img src={img} alt="" style={{ width: '80vw', margin: '2rem 0' }} />
          </div>
        ) :
        (
          <div>
            <p><strong>{exercises.lorem.description}</strong></p> <br />
            {displayExerciseSteps((exercises.lorem.steps))}
            <br />
            <img src={imgDefault} alt="" style={{ width: '80vw', margin: '2rem 0' }} />
          </div>
        )
    }
  }

  return (
    <div>
      <div className='accordion-outer-exercises-wrapper' onClick={() => displayContentInner()}>
        <h4 className='accordion-outer-exercises-title'>{props?.exercises}</h4>
        <div className='accordion-outer-angle-icon-inner grid-center-content'>
          <FontAwesomeIcon icon={angleInner} />
        </div>
      </div>
      {accordionInnerContent()}
    </div>)

}
