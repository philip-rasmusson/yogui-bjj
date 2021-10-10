import { AffiliateCard } from '../components/AffiliateCard'
import './AffiliatesViewDesktop.css'
import torslandaMain from '../../../shared/img/affiliates/torslanda/main.png'
import gripgymMain from '../../../shared/img/affiliates/gripgym/logo.png'
import randoriMain from '../../../shared/img/affiliates/randori/ranrodi.png'
import teamspiritMain from '../../../shared/img/affiliates/teamspirit/tskampsport.png'
import linkopkingMain from '../../../shared/img/affiliates/linkkoping/logo.png'
import nkcMain from '../../../shared/img/affiliates/nkc/logo.png'
import njkMain from '../../../shared/img/affiliates/njk/logo.png'

import defaultImg from '../../../shared/img/instructors/default.png'
import marcelo from '../../../shared/img/affiliates/torslanda/instructors/marcelo-sq.jpg'
import fredrik from '../../../shared/img/affiliates/torslanda/instructors/fredrik-sq.png'
import philiprasmusson from '../../../shared/img/affiliates/torslanda/instructors/philiprasmusson.jpg'
import alanaltermann from '../../../shared/img/affiliates/torslanda/instructors/alanaltermann.jpg'

import toringe from '../../../shared/img/affiliates/gripgym/instructors/toringe.jpg'
import max from '../../../shared/img/affiliates/gripgym/instructors/max.jpg'

import danielwestberg from '../../../shared/img/affiliates/linkkoping/instructors/danielwestberg.jpeg'
import larskarlsson from '../../../shared/img/affiliates/linkkoping/instructors/larskarlsson.jpeg'
import johanlevinsson from '../../../shared/img/affiliates/linkkoping/instructors/johanlevinsson.jpeg'
import adamsandersson from '../../../shared/img/affiliates/linkkoping/instructors/adamandersson.jpeg'
import elinwallman from '../../../shared/img/affiliates/linkkoping/instructors/elinwallman.jpeg'

import jorgenflink from '../../../shared/img/affiliates/njk/instructors/jorgenflink.jpeg'
import kristinaekstrand from '../../../shared/img/affiliates/njk/instructors/kristinaekstrand.jpeg'

import affiliateTorslandaData from '../data/affiliateTorslandaData'
import affiliateRandoriData from '../data/affiliateRandoriData'
import affiliateGripGymData from '../data/affiliatesGripGymData'
import affiliateTeamSpiritData from '../data/affiliateTeamSpiritData'
import affiliateLinkopingData from '../data/affiliateLinkopingData'
import affiliateNKCData from '../data/affiliateNKC'
import affiliateNjkData from '../data/affiliateNjkData'

export const AffiliatesViewDesktop = () => {

  const instructorsTorslanda = [
    { src: marcelo, name: affiliateTorslandaData.instructor1, rank: affiliateTorslandaData.instructor1rank },
    { src: alanaltermann, name: affiliateTorslandaData.instructor2, rank: affiliateTorslandaData.instructor2rank },
    { src: philiprasmusson, name: affiliateTorslandaData.instructor3, rank: affiliateTorslandaData.instructor3rank },
    { src: fredrik, name: affiliateTorslandaData.instructor4, rank: affiliateTorslandaData.instructor4rank },
  ]
  const instructorsRandori = [
    { src: defaultImg, name: affiliateRandoriData.instructor1, rank: affiliateRandoriData.instructor1rank },
  ]
  const instructorsGripGym = [
    { src: toringe, name: affiliateGripGymData.instructor1, rank: affiliateGripGymData.instructor1rank },
    { src: max, name: affiliateTorslandaData.instructor2, rank: affiliateGripGymData.instructor2rank },
  ]
  const instructorsTeamSpirit = [
    { src: defaultImg, name: affiliateTeamSpiritData.instructor1, rank: affiliateTeamSpiritData.instructor1rank },
  ]
  const instructorsLinkoping = [
    { src: danielwestberg, name: affiliateLinkopingData.instructor1, rank: affiliateLinkopingData.instructor1rank },
    { src: larskarlsson, name: affiliateLinkopingData.instructor2, rank: affiliateLinkopingData.instructor2rank },
    { src: adamsandersson, name: affiliateLinkopingData.instructor3, rank: affiliateLinkopingData.instructor3rank },
    { src: johanlevinsson, name: affiliateLinkopingData.instructor4, rank: affiliateLinkopingData.instructor4rank },
    { src: elinwallman, name: affiliateLinkopingData.instructor5, rank: affiliateLinkopingData.instructor5rank },
  ]
  const instructorsNKC = [
    { src: defaultImg, name: affiliateNKCData.instructor1, rank: affiliateNKCData.instructor1rank },
  ]
  const instructorsNJK = [
    { src: jorgenflink, name: affiliateNjkData.instructor1, rank: affiliateNjkData.instructor1rank },
    { src: kristinaekstrand, name: affiliateNjkData.instructor2, rank: affiliateNjkData.instructor2rank },
  ]

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
          img={torslandaMain}
          instructors={instructorsTorslanda}
          googleMaps={affiliateTorslandaData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateLinkopingData.title}
          adress={affiliateLinkopingData.adress}
          email={affiliateLinkopingData.email}
          homepage={affiliateLinkopingData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={linkopkingMain}
          instructors={instructorsLinkoping}
          googleMaps={affiliateLinkopingData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateNjkData.title}
          adress={affiliateNjkData.adress}
          email={affiliateNjkData.email}
          homepage={affiliateNjkData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={njkMain}
          instructors={instructorsNJK}
          googleMaps={affiliateNjkData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateNKCData.title}
          adress={affiliateNKCData.adress}
          email={affiliateNKCData.email}
          homepage={affiliateNKCData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={nkcMain}
          instructors={instructorsNKC}
          googleMaps={affiliateNKCData.googleMaps}
        />
      </div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateRandoriData.title}
          adress={affiliateRandoriData.adress}
          email={affiliateRandoriData.email}
          homepage={affiliateRandoriData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={randoriMain}
          instructors={instructorsRandori}
          googleMaps={affiliateRandoriData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateGripGymData.title}
          adress={affiliateGripGymData.adress}
          email={affiliateGripGymData.email}
          homepage={affiliateGripGymData.homepage}
          btnText="besök hemsida"
          btnTextEng=""
          img={gripgymMain}
          instructors={instructorsGripGym}
          googleMaps={affiliateGripGymData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
      <div className="affiliates-view-desktop-default font-grey">
        <AffiliateCard
          title={affiliateTeamSpiritData.title}
          adress={affiliateTeamSpiritData.adress}
          email={affiliateTeamSpiritData.email}
          homepage={affiliateTeamSpiritData.homepage}
          btnText={affiliateTorslandaData.btnText}
          btnTextEng={affiliateTorslandaData.btnTextEng}
          img={teamspiritMain}
          instructors={instructorsTeamSpirit}
          googleMaps={affiliateTeamSpiritData.googleMaps}
        />
      </div>
      <div className="line-divider-mobile"></div>
    </div>
  )
}
