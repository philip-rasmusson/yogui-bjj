import { AffiliateCard } from '../components/AffiliateCard'
import './AffiliatesViewMobile.css'
import torslandaMain from '../../../shared/img/affiliates/torslanda/main.png'
import gripgymMain from '../../../shared/img/affiliates/gripgym/logo.png'
import randoriMain from '../../../shared/img/affiliates/randori/ranrodi.png'
import teamspiritMain from '../../../shared/img/affiliates/teamspirit/tskampsport.png'
import linkopkingMain from '../../../shared/img/affiliates/linkkoping/logo.png'
import nkcMain from '../../../shared/img/affiliates/nkc/logo.png'
import njkMain from '../../../shared/img/affiliates/njk/logo.png'

import instructors from '../data/instructors'

import affiliateTorslandaData from '../data/affiliateTorslandaData'
import affiliateRandoriData from '../data/affiliateRandoriData'
import affiliateGripGymData from '../data/affiliatesGripGymData'
import affiliateTeamSpiritData from '../data/affiliateTeamSpiritData'
import affiliateLinkopingData from '../data/affiliateLinkopingData'
import affiliateNKCData from '../data/affiliateNKC'
import affiliateNjkData from '../data/affiliateNjkData'

export const AffiliatesViewMobile = () => {

  return (
    <div className="affiliates-view-mobile-wrapper">
      <div className="affiliates-view-mobile-default font-grey">
        <AffiliateCard
          title={affiliateTorslandaData.title}
          adress={affiliateTorslandaData.adress}
          email={affiliateTorslandaData.email}
          homepage={affiliateTorslandaData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={torslandaMain}
          instructors={instructors.instructorsTorslanda}
          googleMaps={affiliateTorslandaData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-mobile-default font-grey">
        <AffiliateCard
          title={affiliateRandoriData.title}
          adress={affiliateRandoriData.adress}
          email={affiliateRandoriData.email}
          homepage={affiliateRandoriData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={randoriMain}
          instructors={instructors.instructorsRandori}
          googleMaps={affiliateRandoriData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-mobile-default font-grey">
        <AffiliateCard
          title={affiliateGripGymData.title}
          adress={affiliateGripGymData.adress}
          email={affiliateGripGymData.email}
          homepage={affiliateGripGymData.homepage}
          btnText="besök hemsida"
          btnTextEng=""
          img={gripgymMain}
          instructors={instructors.instructorsGripGym}
          googleMaps={affiliateGripGymData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-mobile-default font-grey">
        <AffiliateCard
          title={affiliateTeamSpiritData.title}
          adress={affiliateTeamSpiritData.adress}
          email={affiliateTeamSpiritData.email}
          homepage={affiliateTeamSpiritData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={teamspiritMain}
          instructors={instructors.instructorsTeamSpirit}
          googleMaps={affiliateTeamSpiritData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-mobile-default font-grey">
        <AffiliateCard
          title={affiliateLinkopingData.title}
          adress={affiliateLinkopingData.adress}
          email={affiliateLinkopingData.email}
          homepage={affiliateLinkopingData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={linkopkingMain}
          instructors={instructors.instructorsLinkoping}
          googleMaps={affiliateLinkopingData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-mobile-default font-grey">
        <AffiliateCard
          title={affiliateNKCData.title}
          adress={affiliateNKCData.adress}
          email={affiliateNKCData.email}
          homepage={affiliateNKCData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={nkcMain}
          instructors={instructors.instructorsNKC}
          googleMaps={affiliateNKCData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-mobile-default font-grey">
        <AffiliateCard
          title={affiliateNjkData.title}
          adress={affiliateNjkData.adress}
          email={affiliateNjkData.email}
          homepage={affiliateNjkData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={njkMain}
          instructors={instructors.instructorsNJK}
          googleMaps={affiliateNjkData.googleMaps}
        />
      </div>
    </div>
  )
}
