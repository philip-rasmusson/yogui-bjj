import { DefaultHeaderMobile } from '../../../shared/components/defaultHeader/defaultHeaderMobile/DefaultHeaderMobile'
import './InstructorsViewMobile.css'
import instructorsViewData from '../data/InstructorsViewData'
import { InstructorsCard } from '../components/InstructorsCard'
import marcelo from '../../../shared/img/instructors/marcelo-sq.jpg'
import unknown from '../../../shared/img/instructors/default.png'

export const InstructorsViewMobile = () => {
  return (
    <div className="instructors-view-mobile-wrapper">
      <DefaultHeaderMobile title={instructorsViewData.title} bgImg={instructorsViewData.bgImg} />

      <InstructorsCard
        name={instructorsViewData.nameMarcelo}
        img={marcelo}
        imgAlt={instructorsViewData.imgAlt}
        info={instructorsViewData.infoMareclo}
      />
      <InstructorsCard
        name={instructorsViewData.nameAlan}
        img={unknown}
        imgAlt={instructorsViewData.imgAlt}
        info={instructorsViewData.infoAlan}
      />
      <InstructorsCard
        name={instructorsViewData.namePhilip}
        img={unknown}
        imgAlt={instructorsViewData.imgAlt}
        info={instructorsViewData.infoPhilip}
      />
      <InstructorsCard
        name={instructorsViewData.nameFredrik}
        img={unknown}
        imgAlt={instructorsViewData.imgAlt}
        info={instructorsViewData.infoFredrik}
      />
      <InstructorsCard
        name={instructorsViewData.nameAndreas}
        img={unknown}
        imgAlt={instructorsViewData.imgAlt}
        info={instructorsViewData.infoAndreas}
      />

    </div>
  )
}
