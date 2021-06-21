import './ExercisesView.css'
import { AccordionOuter } from "./components/AccordionOuter"
import { AccordionInner } from "./components/AccordionInner"

export const ExercisesView = () => {
  return (
    <div className='excercises-view-wrapper'>
      <AccordionOuter title='bröst' />
      <AccordionOuter title='ben' />
      <AccordionOuter title='armar' />
      <AccordionOuter title='rygg' />
      <AccordionOuter title='mage' />
    </div>
  )
}
