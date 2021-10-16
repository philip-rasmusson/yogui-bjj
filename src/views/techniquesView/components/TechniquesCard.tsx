// import TechniquesViewData from '../data/TechniquesViewData'
// import { AccordionOuter } from '../../../shared/components/AccordionOuter'
// import r from '../../../shared/img/techniques/positions/mount.png'
import { TechniquesImgPaths } from '../data/TechniquesImgPaths'

export const TechniquesCard = (props: { array: any }) => {



  return (<>
    <h3>{props.array.name}</h3>
    <img src={TechniquesImgPaths[props.array.id].img} alt="" />
    <p>{props.array.text}</p>
  </>)
}
