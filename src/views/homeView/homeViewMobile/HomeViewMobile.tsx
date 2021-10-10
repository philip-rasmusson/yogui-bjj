import './HomeViewMobile.css'
import HomeViewData from '../data/HomeViewData'
import { DefaultSectionOneMobile } from '../../../shared/components/defaultSectionOneMobile/DefaultSectionOneMobile'
import { DefaultSectionTwoMobile } from '../../../shared/components/defaultSectionTwoMobile/DefaultSectionTwoMobile'
import { DefaultSectionThreeMobile } from '../../../shared/components/defaultSectionThreeMobile/DefaultSectionThreeMobile'
import homeImg1 from '../../../shared/img/homeImgs/homeImg1.png'
import homeImg2 from '../../../shared/img/homeImgs/homeImg2.png'
import homeImg3 from '../../../shared/img/homeImgs/homeImg3.png'
import homeImg4 from '../../../shared/img/homeImgs/homeImg4.png'
import homeImg5 from '../../../shared/img/homeImgs/homeImg5.jpg'
import affiliateTorslandaData from '../../affiliatesView/data/affiliateTorslandaData'
import GlobalData from '../../../data/GlobalData'
import RoutingPath from '../../../routes/RoutingPath'


export const HomeViewMobile = () => {
  return (
    <div className="home-mobile-wrapper">
      <div className="home-mobile-header-wrapper">
        <button className="side-button-left-mobile font-white bg-color-black">{HomeViewData.title}</button>
        <div className="white-overlay" />
      </div>

      {/* SECTION ONE */}
      <DefaultSectionTwoMobile
        img={homeImg3}
        title={HomeViewData.titleSectionOne}
        titleEng={HomeViewData.titleSectionOne}
        text={HomeViewData.textSectionOnePartOne}
        textEng={HomeViewData.textSectionOnePartOne}

      />
      {/* <div className="line-divider-home" /> */}
      {/* <DefaultSectionOneMobile
        img={homeImg5}
        title={HomeViewData.titleSectionTwo}
        titleEng={HomeViewData.titleSectionTwoEng}
        text={HomeViewData.textSectionTwo}
        textEng={HomeViewData.textSectionTwoEng}
        btnText={HomeViewData.readmore}
        btnTextEng={HomeViewData.readmoreEng}
        btnLink=""
      /> */}
      <div className="line-divider-mobile" />
      <DefaultSectionOneMobile
        img={homeImg2}
        title={HomeViewData.titleSectionThree}
        titleEng={HomeViewData.titleSectionThreeEng}
        text={HomeViewData.textSectionThree}
        textEng={HomeViewData.textSectionThreeEng}
        btnText={HomeViewData.readmore}
        btnTextEng={HomeViewData.readmoreEng}
        btnLink={RoutingPath.policyView}
      />
      <div className="line-divider-mobile" />
      <DefaultSectionThreeMobile
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
