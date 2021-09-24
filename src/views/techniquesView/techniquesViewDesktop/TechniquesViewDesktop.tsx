import { TechniquesAccordion } from '../components/TechniquesAccordion'
import TechniquesViewData from '../data/TechniquesViewData'
import './TechniquesViewDesktop.css'

export const TechniquesViewDesktop = () => {
  return (
    <>
      <TechniquesAccordion arr={TechniquesViewData.techniquesSubmissionsArray} />
    </>
  )
}
