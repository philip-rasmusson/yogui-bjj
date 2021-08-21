import { useState } from 'react'

export const ExercisesNavbar = (props?: { title?: string }) => {
  const [underline, setUnderline] = useState<any>('inactive')

  const switchActive = () => {
    underline === 'inactive' ? setUnderline('active') : setUnderline('inactive')
  }

  return (
    <div onClick={() => switchActive()}>
      <h3 className={underline}>{props?.title}</h3>
    </div>
  )
}
