import { DefaultSectionOneDesktop } from '../../../shared/components/defaultSectionOneDesktop/DefaultSectionOneDesktop'
import { AffiliateCard } from '../components/AffiliateCard'
import './AffiliatesViewDesktop.css'
import main from '../../../shared/img/affiliates/torslanda/main.png'
import defaultImg from '../../../shared/img/instructors/default.png'
import marcelo from '../../../shared/img/affiliates/torslanda/instructors/marcelo-sq.jpg'
import fredrik from '../../../shared/img/affiliates/torslanda/instructors/fredrik-sq.png'
import affiliateTorslandaData from '../data/affiliateTorslandaData'

export const AffiliatesViewDesktop = () => {

  const instructorsTorslanda = [
    { src: marcelo, name: affiliateTorslandaData.instructor1, rank: affiliateTorslandaData.instructor1rank },
    { src: defaultImg, name: affiliateTorslandaData.instructor2, rank: affiliateTorslandaData.instructor2rank },
    { src: defaultImg, name: affiliateTorslandaData.instructor3, rank: affiliateTorslandaData.instructor3rank },
    { src: fredrik, name: affiliateTorslandaData.instructor4, rank: affiliateTorslandaData.instructor4rank },
  ]

  return (
    <div className="affiliates-view-desktop-wrapper">
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title="torslanda kampsportcenter"
          adress="Hangarvägen 5, 342 56  TORSLANDA, SVERIGE"
          email="info@torslandakampsportcenter.se"
          homepage="www.torslandakampsportcenter.se"
          btnText="besök hemsida"
          btnTextEng=""
          img={main}
          instructors={instructorsTorslanda}
          border="black solid 1px"
        />
      </div>
      <div className="affiliates-view-desktop-color font-white">
        <AffiliateCard
          title="torslanda kampsportcenter"
          adress="Hangarvägen 5, 342 56  TORSLANDA, SVERIGE"
          email="info@torslandakampsportcenter.se"
          homepage="www.torslandakampsportcenter.se"
          btnText="besök hemsida"
          btnTextEng=""
          img={main}
          instructors={instructorsTorslanda}
          border="white solid 1px"
        />
      </div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title="torslanda kampsportcenter"
          adress="Hangarvägen 5, 342 56  TORSLANDA, SVERIGE"
          email="info@torslandakampsportcenter.se"
          homepage="www.torslandakampsportcenter.se"
          btnText="besök hemsida"
          btnTextEng=""
          img={main}
          instructors={instructorsTorslanda}
          border="black solid 1px"
        />
      </div>
    </div>
  )
}
