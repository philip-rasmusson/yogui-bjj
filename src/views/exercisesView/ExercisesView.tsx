import './ExercisesView.css'
import { AccordionOuter } from "./components/AccordionOuter"

export const ExercisesView = () => {

  const exercisesChest = ['bänkpress', 'lutande bänkpress', 'hantelfly', 'dips', 'hantelpress', 'kryssdrag']
  const exercisesLegs = ['benövning', 'benövning', 'benövning',]
  const exercisesArms = ['hantelcurls', 'scottcurls', 'pushdowns', 'bänkdips',]
  const exercisesShoulders = ['militärpress', 'hantelpress', 'hantellyft', 'kabellyft',]
  const exerciseBack = ['chins', 'latsdrag', 'rodd', 'marklyft', 'ryggresning',]
  const exerciseCore = ['crunches', 'situps', 'benlyft',]

  return (
    <div className='excercises-view-wrapper'>
      {/* <div className='exercise-view-navbar-wrapper'>
        <ExercisesNavbar title='BRÖST' />
        <ExercisesNavbar title='BEN' />
        <ExercisesNavbar title='ARMAR' />
        <ExercisesNavbar title='RYGG' />
        <ExercisesNavbar title='MAGE' />
      </div> */}
      <div className='excercises-view-accordion-wrapper font-grey'>
        <AccordionOuter title='bröst' exercises={exercisesChest} />
        <AccordionOuter title='ben' exercises={exercisesLegs} />
        <AccordionOuter title='armar' exercises={exercisesArms} />
        <AccordionOuter title='axlar' exercises={exercisesShoulders} />
        <AccordionOuter title='rygg' exercises={exerciseBack} />
        <AccordionOuter title='mage' exercises={exerciseCore} />
      </div>
    </div>
  )
}
