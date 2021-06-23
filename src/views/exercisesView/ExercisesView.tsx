import './ExercisesView.css'
import { AccordionOuter } from "./components/AccordionOuter"
import { AccordionInner } from "./components/AccordionInner"
import { ExercisesNavbar } from './components/ExercisesNavbar'

export const ExercisesView = () => {

  const exercisesChest = ['bänkpress', 'lutande bänkpress', 'hantelfly', 'dips', 'hantelpress', 'kryssdrag']
  const exercisesLegs = ['benövning', 'benövning', 'benövning',]
  const exercisesArms = ['armövning', 'armövning', 'armövning', 'armövning',]
  const exerciseBack = ['ryggövning', 'ryggövning', 'ryggövning', 'ryggövning', 'ryggövning',]
  const exerciseCore = ['magövning', 'magövning', 'magövning',]

  return (
    <div className='excercises-view-wrapper'>
      {/* <div className='exercise-view-navbar-wrapper'>
        <ExercisesNavbar title='BRÖST' />
        <ExercisesNavbar title='BEN' />
        <ExercisesNavbar title='ARMAR' />
        <ExercisesNavbar title='RYGG' />
        <ExercisesNavbar title='MAGE' />
      </div> */}
      <div className='excercises-view-accordion-wrapper'>
        <AccordionOuter title='bröst' exercises={exercisesChest} />
        <AccordionOuter title='ben' exercises={exercisesLegs} />
        <AccordionOuter title='armar' exercises={exercisesArms} />
        <AccordionOuter title='rygg' exercises={exerciseBack} />
        <AccordionOuter title='mage' exercises={exerciseCore} />
      </div>
    </div>
  )
}
