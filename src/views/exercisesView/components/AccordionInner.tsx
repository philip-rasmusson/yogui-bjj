import { useState } from 'react'
import './Accordion.css'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../../../shared/img/workout_imgs/chest/dumbell-fly.png'

export const AccordionInner = (props?: { exercises?: any }) => {
  const [angleInner, setAngleInner] = useState<any>(faAngleRight)

  const displayContentInner = () => {
    if (angleInner === faAngleRight) {
      setAngleInner(faAngleDown)
    } else {
      setAngleInner(faAngleRight)
    }
  }

  const accordionInnerContent = () => {
    return angleInner === faAngleRight ? <></> : (
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor, perspiciatis recusandae labore qui fugit eos, nihil aliquam atque voluptates dolore quibusdam beatae sint! Aperiam qui voluptates enim rerum debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum corrupti consectetur, impedit repellat blanditiis harum assumenda exercitationem modi, autem officiis pariatur similique totam dolor placeat accusantium sed recusandae ea ut?</p> <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quibusdam sint molestias iusto placeat rem labore corporis ipsam nobis vitae fugiat, excepturi suscipit provident ex, maxime totam ipsum sapiente alias.</p>
        <br />
        <img src={img} alt="" style={{ width: '80vw', margin: '2rem 0' }} />
      </div>

    )
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
