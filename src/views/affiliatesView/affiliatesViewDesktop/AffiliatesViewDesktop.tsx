import { DefaultSectionOneDesktop } from '../../../shared/components/defaultSectionOneDesktop/DefaultSectionOneDesktop'
import { AffiliateCard } from '../components/AffiliateCard'
import './AffiliatesViewDesktop.css'
import marcelo from '../../../shared/img/homeImgs/sq/marcelo-sq.jpg'
import main from '../../../shared/img/affiliates/torslanda/main.png'
import x from '../../../shared/img/instructors/marcelo-sq.jpg'

export const AffiliatesViewDesktop = () => {

  const instructorsTorslanda = [
    { src: x },
    { src: x },
    { src: x },
    { src: x },
    { src: x },
  ]

  return (
    <div className="affiliates-view-desktop-wrapper">
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title="torslanda kampsportcenter"
          adress="Hangarvägen 5, 342 56  TORSLANDA, SVERIGE"
          btnText="besök hemsida"
          btnTextEng=""
          img={main}
          instructors={instructorsTorslanda}
        />
      </div>
      <div className="affiliates-view-desktop-color font-white">
        <AffiliateCard
          title="torslanda kampsportcenter"
          adress="hangarvägen"
          btnText="besök hemsida"
          btnTextEng=""
          img={main}
          instructors={instructorsTorslanda}
        />
      </div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title="torslanda kampsportcenter"
          adress="hangarvägen"
          btnText="besök hemsida"
          btnTextEng=""
          img={main}
          instructors={instructorsTorslanda}
        />
      </div>
    </div>
  )
}
