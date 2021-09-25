import TechniquesViewData from '../data/TechniquesViewData'
import { AccordionOuter } from '../../../shared/components/AccordionOuter'
import r from '../../../shared/img/techniques/submissions/mount.jpg'

export const TechniquesCard = () => {
  // const techniquesPositions = props.arr.map((x: any) => {
  //   return (
  //     <>
  //       <h1>{x.technique}</h1>
  //       <img src={x.img} alt="" />
  //       <p>{x.text}</p>
  //     </>
  //   )
  // })

  // const techniquesArray = props?.arr.map((x: any) => {
  //   return <AccordionOuter title={x.title} exercises={x} />
  // })

  return (
    <>
      <AccordionOuter title="submissions" exercises={TechniquesViewData.techniquesSubmissionsArray} />
      <AccordionOuter title="positions" exercises={TechniquesViewData.techniquesSubmissionsArray} />
    </>
    // <div>
    //   {techniquesPositions}
    //   {/* <AccordionOuter title={TechniquesViewData.positionsEng} exercises={techniquesPositions} />
    //   <AccordionOuter title={TechniquesViewData.submissions} exercises={techniquesSubmissions} /> */}
    // </div>
  )
}
