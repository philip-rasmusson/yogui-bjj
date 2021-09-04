import React from 'react'
import { AccordionOuter } from '../../../shared/components/AccordionOuter'

export const TechniquesAccordion = () => {
  const exercisesChest = ['bänkpress', 'lutande bänkpress', 'hantelfly', 'dips', 'hantelpress', 'kryssdrag']
  return (
    <div>
      <AccordionOuter title='arbmar' exercises={exercisesChest} />
    </div>
  )
}
