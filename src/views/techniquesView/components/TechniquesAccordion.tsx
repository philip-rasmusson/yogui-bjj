import TechniquesViewData from '../data/TechniquesViewData'
import { AccordionOuter } from '../../../shared/components/AccordionOuter'
import r from '../../../shared/img/techniques/submissions/mount.jpg'

export const TechniquesAccordion = (props: { arr: any }) => {
  const techniquesPositions = props.arr.map((x: any) => {
    return (
      <>
        <h1>{x.technique}</h1>
        <img src={x.img} alt="" />
        <p>{x.text}</p>
      </>
    )
  })
  // const techniquesSubmissions = TechniquesViewData.techniquesSubmissionsArray.map(x => {
  //   return x
  // })

  return (
    <div>
      {techniquesPositions}
      {/* <AccordionOuter title={TechniquesViewData.positionsEng} exercises={techniquesPositions} />
      <AccordionOuter title={TechniquesViewData.submissions} exercises={techniquesSubmissions} /> */}
    </div>
  )
}
