import './TechniquesViewMobile.css'
import { AccordionOuter } from '../../../shared/components/AccordionOuter'
import { AccordionInner } from '../../../shared/components/AccordionInner'

export const TechniquesViewMobile = () => {
  const exercisesChest = ['bänkpress', 'lutande bänkpress', 'hantelfly', 'dips', 'hantelpress', 'kryssdrag']
  return (
    <div>
      <AccordionOuter title='arbmar' exercises={exercisesChest} />
    </div>
  )
}
