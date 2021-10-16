// import { AccordionOuter } from '../../../shared/components/AccordionOuter'
import { TechniquesCard } from '../components/TechniquesCard'
import TechniquesViewData from '../data/TechniquesViewData'
import './TechniquesViewDesktop.css'

export const TechniquesViewDesktop = () => {



  return (
    <div className="techniques-view-desktop-wrapper">
      <div className="techniques-desktop-positions-wrapper">
        <h1>Positions</h1>
        <div className="techniques-desktop-techniques-card-wrapper">
          <TechniquesCard array={TechniquesViewData.techniquesSubmissionsArray[0]} />
          <TechniquesCard array={TechniquesViewData.techniquesSubmissionsArray[1]} />
          <TechniquesCard array={TechniquesViewData.techniquesSubmissionsArray[2]} />
          <TechniquesCard array={TechniquesViewData.techniquesSubmissionsArray[3]} />
        </div>
      </div>
      <div className="techniques-desktop-positions-wrapper">
        <h1>Submisisons</h1>
        <div className="techniques-desktop-techniques-card-wrapper">
          <TechniquesCard array={TechniquesViewData.techniquesPositionsArray[0]} />
          <TechniquesCard array={TechniquesViewData.techniquesPositionsArray[1]} />
          <TechniquesCard array={TechniquesViewData.techniquesPositionsArray[2]} />
          <TechniquesCard array={TechniquesViewData.techniquesPositionsArray[3]} />
          <TechniquesCard array={TechniquesViewData.techniquesPositionsArray[4]} />
          <TechniquesCard array={TechniquesViewData.techniquesPositionsArray[5]} />
        </div>
      </div>
    </div >
  )
}
