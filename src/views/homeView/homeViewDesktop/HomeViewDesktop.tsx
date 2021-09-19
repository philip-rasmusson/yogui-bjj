import './HomeViewDesktop.css'
import HomeViewData from '../data/HomeViewData'
import { DefaultSectionOneDesktop } from '../../../shared/components/defaultSectionOneDesktop/DefaultSectionOneDesktop'
import homeImg1 from '../../../shared/img/homeImgs/homeImg1.png'
import homeImg2 from '../../../shared/img/homeImgs/homeImg2.png'
import homeImg3 from '../../../shared/img/homeImgs/homeImg3.png'
import homeImg4 from '../../../shared/img/homeImgs/homeImg4.png'
import marcelo from '../../../shared/img/homeImgs/sq/marcelo-sq.jpg'
import policy from '../../../shared/img/homeImgs/sq/policy-sq.jpg'
import teq from '../../../shared/img/homeImgs/sq/teq-sq.jpg'
import { SelectLanguage } from '../../../functions/SelectLanguage'
import headerImg from '../../../shared/img/IMG_5150.jpg'

export const HomeViewDesktop = () => {
  return (
    <div className="home-desktop-wrapper">
      <div className="home-desktop-header-wrapper">
        {/* <h2 className="home-desktop-title">{HomeViewData.title}</h2> */}
        <img src={headerImg} alt="" />
        <button className="side-button-right-desktop font-white bg-color-black box-shadow">
          <SelectLanguage
            textSwe={HomeViewData.title}
            textEng={HomeViewData.titleEng}
          />
        </button>
        {/* <div className="white-overlay" /> */}
      </div>

      {/* SECTION ONE */}
      <DefaultSectionOneDesktop
        img={marcelo}
        title={HomeViewData.titleSectionOne}
        titleEng={HomeViewData.titleSectionOne}
        text={HomeViewData.textSectionOne}
        textEng={HomeViewData.textSectionOne}
        btnText={HomeViewData.readmore}
        btnTextEng={HomeViewData.readmoreEng}
        btnLink=""
      />
      <div className="line-divider-home" />

      <DefaultSectionOneDesktop
        img={teq}
        title={HomeViewData.titleSectionTwo}
        titleEng={HomeViewData.titleSectionTwoEng}
        text={HomeViewData.textSectionTwo}
        textEng={HomeViewData.textSectionTwoEng}
        btnText={HomeViewData.readmore}
        btnTextEng={HomeViewData.readmoreEng}
        btnLink=""
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
        btnLink=""
      />
      <div className="line-divider-home" />
      <DefaultSectionOneDesktop
        img={homeImg4}
        title={HomeViewData.titleSectionFour}
        titleEng={HomeViewData.titleSectionFourEng}
        text={HomeViewData.textSectionFour}
        textEng={HomeViewData.textSectionFourEng}
        btnText={HomeViewData.showOnMap}
        btnTextEng={HomeViewData.showOnMapEng}
        btnLink=""
      />
    </div>
  )
}
