import './HomeViewMobile.css'
import HomeViewData from '../data/HomeViewData'
import { DefaultSectionOneMobile } from '../../../shared/components/defaultSectionOneMobile/DefaultSectionOneMobile'
import { DefaultSectionOneMobileExternalLink } from '../../../shared/components/defaultSectionOneMobileExternalLink/DefaultSectionOneMobileExternalLink'
import homeImg2 from '../../../shared/img/homeImgs/homeImg2.png'
import homeImg3 from '../../../shared/img/homeImgs/homeImg3.png'
import homeImg4 from '../../../shared/img/homeImgs/homeImg4.png'
import affiliateTorslandaData from '../../affiliatesView/data/affiliateTorslandaData'
import RoutingPath from '../../../routes/RoutingPath'


export const HomeViewMobile = () => {
  return (
    <div className="home-mobile-wrapper">
      <div className="home-mobile-header-wrapper">
        <button className="side-button-left-mobile font-white bg-color-black">{HomeViewData.title}</button>
        <div className="white-overlay" />
      </div>

      {/* SECTION ONE */}
      <DefaultSectionOneMobile
        img={homeImg3}
        title={HomeViewData.titleSectionOne}
        titleEng={HomeViewData.titleSectionOne}
        text={HomeViewData.textSectionOnePartOne}
        textEng={HomeViewData.textSectionOnePartOne}
        btnText={HomeViewData.readmore}
        btnTextEng={HomeViewData.readmoreEng}
        btnLink={RoutingPath.aboutUsView}
      />
      <div className="line-divider-mobile" />
      <DefaultSectionOneMobile
        img={homeImg2}
        title={HomeViewData.titleSectionOne}
        titleEng={HomeViewData.titleSectionThreeEng}
        text={HomeViewData.textSectionThree}
        textEng={HomeViewData.textSectionThreeEng}
        btnText={HomeViewData.readmore}
        btnTextEng={HomeViewData.readmoreEng}
        btnLink={RoutingPath.policyView}
      />
      <div className="line-divider-mobile" />
      <DefaultSectionOneMobileExternalLink
        img={homeImg4}
        title={HomeViewData.titleSectionFour}
        titleEng={HomeViewData.titleSectionFourEng}
        text={HomeViewData.textSectionFour}
        textEng={HomeViewData.textSectionFourEng}
        btnText={HomeViewData.showOnMap}
        btnTextEng={HomeViewData.showOnMapEng}
        btnLink={affiliateTorslandaData.googleMaps}
      />
    </div>
  )
}
