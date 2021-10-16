import './HomeViewDesktop.css'
import HomeViewData from '../data/HomeViewData'
import { DefaultSectionOneDesktop } from '../../../shared/components/defaultSectionOneDesktop/DefaultSectionOneDesktop'
import { DefaultSectionOneDesktopExternalLink } from '../../../shared/components/defaultSectionOneDesktopExternalLink/DefaultSectionOneDesktopExternalLink'
import homeImg4 from '../../../shared/img/homeImgs/homeImg4.png'
import marcelo from '../../../shared/img/homeImgs/sq/marcelo-sq.jpg'
import policy from '../../../shared/img/homeImgs/sq/policy-sq.jpg'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import headerImg from '../../../shared/img/IMG_5150.jpg'
import RoutingPath from '../../../routes/RoutingPath'
import affiliateTorslandaData from '../../affiliatesView/data/affiliateTorslandaData'

export const HomeViewDesktop = () => {
  return (
    <div className="home-desktop-wrapper">
      <div className="home-desktop-header-wrapper">
        <img src={headerImg} alt="" />
        <button className="side-button-right-desktop font-white bg-color-black box-shadow">
          <SelectLanguage
            textSwe={HomeViewData.title}
            textEng={HomeViewData.titleEng}
          />
        </button>
      </div>

      {/* SECTION ONE */}
      <DefaultSectionOneDesktop
        img={marcelo}
        title={HomeViewData.titleSectionOne}
        titleEng={HomeViewData.titleSectionOne}
        text={HomeViewData.textSectionOnePartOne}
        textEng={HomeViewData.textSectionOnePartOne}
        btnText={HomeViewData.readmore}
        btnTextEng={HomeViewData.readmoreEng}
        btnLink={RoutingPath.policyView}
      />
      <div className="line-divider-home" />
      <DefaultSectionOneDesktop
        img={policy}
        title={HomeViewData.titleSectionThree}
        titleEng={HomeViewData.titleSectionThreeEng}
        text={HomeViewData.textSectionThree}
        textEng={HomeViewData.textSectionThreeEng}
        btnText={HomeViewData.readmore}
        btnTextEng={HomeViewData.readmoreEng}
        btnLink={RoutingPath.policyView}
      />
      <div className="line-divider-home" />
      <DefaultSectionOneDesktopExternalLink
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
