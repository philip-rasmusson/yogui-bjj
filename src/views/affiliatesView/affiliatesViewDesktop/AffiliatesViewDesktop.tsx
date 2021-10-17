import { AffiliateCard } from '../components/AffiliateCard'
import './AffiliatesViewDesktop.css'

import affiliateImgs from '../data/affiliateImgs'
import instructors from '../data/instructors'

import affiliateTorslandaData from '../data/affiliateTorslandaData'
import affiliateRandoriData from '../data/affiliateRandoriData'
import affiliateGripGymData from '../data/affiliatesGripGymData'
import affiliateTeamSpiritData from '../data/affiliateTeamSpiritData'
import affiliateLinkopingData from '../data/affiliateLinkopingData'
import affiliateNKCData from '../data/affiliateNKC'
import affiliateNjkData from '../data/affiliateNjkData'

export const AffiliatesViewDesktop = () => {

  return (
    <div className="affiliates-view-desktop-wrapper">
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateTorslandaData.title}
          adress={affiliateTorslandaData.adress}
          email={affiliateTorslandaData.email}
          homepage={affiliateTorslandaData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={affiliateImgs.torslandaMain}
          instructors={instructors.instructorsTorslanda}
          googleMaps={affiliateTorslandaData.googleMaps}
        />
      </div>
      <div className="line-divider-desktop"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateLinkopingData.title}
          adress={affiliateLinkopingData.adress}
          email={affiliateLinkopingData.email}
          homepage={affiliateLinkopingData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={affiliateImgs.linkopkingMain}
          instructors={instructors.instructorsLinkoping}
          googleMaps={affiliateLinkopingData.googleMaps}
        />
      </div>
      <div className="line-divider-desktop"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateNjkData.title}
          adress={affiliateNjkData.adress}
          email={affiliateNjkData.email}
          homepage={affiliateNjkData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={affiliateImgs.njkMain}
          instructors={instructors.instructorsNJK}
          googleMaps={affiliateNjkData.googleMaps}
        />
      </div>
      <div className="line-divider-desktop"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateNKCData.title}
          adress={affiliateNKCData.adress}
          email={affiliateNKCData.email}
          homepage={affiliateNKCData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={affiliateImgs.nkcMain}
          instructors={instructors.instructorsNKC}
          googleMaps={affiliateNKCData.googleMaps}
        />
      </div>
      <div className="line-divider-desktop"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateRandoriData.title}
          adress={affiliateRandoriData.adress}
          email={affiliateRandoriData.email}
          homepage={affiliateRandoriData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={affiliateImgs.randoriMain}
          instructors={instructors.instructorsRandori}
          googleMaps={affiliateRandoriData.googleMaps}
        />
      </div>
      <div className="line-divider-desktop"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateGripGymData.title}
          adress={affiliateGripGymData.adress}
          email={affiliateGripGymData.email}
          homepage={affiliateGripGymData.homepage}
          btnText="besök hemsida"
          btnTextEng=""
          img={affiliateImgs.gripgymMain}
          instructors={instructors.instructorsGripGym}
          googleMaps={affiliateGripGymData.googleMaps}
        />
      </div>
      <div className="line-divider-desktop"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateTeamSpiritData.title}
          adress={affiliateTeamSpiritData.adress}
          email={affiliateTeamSpiritData.email}
          homepage={affiliateTeamSpiritData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={affiliateImgs.teamspiritMain}
          instructors={instructors.instructorsTeamSpirit}
          googleMaps={affiliateTeamSpiritData.googleMaps}
        />
      </div>
    </div>
  )
}
