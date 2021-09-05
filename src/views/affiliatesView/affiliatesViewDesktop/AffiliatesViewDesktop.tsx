import { DefaultSectionOneDesktop } from '../../../shared/components/defaultSectionOneDesktop/DefaultSectionOneDesktop'
import { AffiliateCard } from '../components/AffiliateCard'
import './AffiliatesViewDesktop.css'
import marcelo from '../../../shared/img/homeImgs/sq/marcelo-sq.jpg'

export const AffiliatesViewDesktop = () => {
  return (
    <div className="affiliates-view-desktop-wrapper">
      <AffiliateCard
        title="torslanda kampsportcenter"
        titleEng=""
        text="hangarvägen"
        textEng=""
        btnText="besök hemsida"
        btnTextEng=""
        img={marcelo}
      />
    </div>
  )
}
