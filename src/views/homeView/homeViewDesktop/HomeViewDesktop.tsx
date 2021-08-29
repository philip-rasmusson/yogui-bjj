import './HomeViewDesktop.css'
import HomeViewData from '../data/HomeViewData'
import { DefaultSectionOneDesktop } from '../../../shared/components/defaultSectionOneDesktop/DefaultSectionOneDesktop'
import homeImg1 from '../../../shared/img/homeImgs/homeImg1.png'
import homeImg2 from '../../../shared/img/homeImgs/homeImg2.png'
import homeImg3 from '../../../shared/img/homeImgs/homeImg3.png'
import homeImg4 from '../../../shared/img/homeImgs/homeImg4.png'

export const HomeViewDesktop = () => {
  return (
    <div className="home-desktop-wrapper">
      <div className="home-desktop-header-wrapper">
        {/* <h2 className="home-desktop-title">{HomeViewData.title}</h2> */}
        <button className="side-button-right-desktop font-white bg-color-black box-shadow">{HomeViewData.title}</button>
        <div className="white-overlay" />
      </div>

      {/* SECTION ONE */}
      <DefaultSectionOneDesktop
        img={homeImg1}
        title={HomeViewData.titleSectionOne}
        text={HomeViewData.textSectionOne}
        btnText={HomeViewData.readmore}
        btnLink=""
      />
      <div className="line-divider-home" />

      <DefaultSectionOneDesktop
        img={homeImg2}
        title={HomeViewData.titleSectionTwo}
        text={HomeViewData.textSectionTwo}
        btnText={HomeViewData.readmore}
        btnLink=""
      />
      <div className="line-divider-home" />
      <DefaultSectionOneDesktop
        img={homeImg3}
        title={HomeViewData.titleSectionThree}
        text={HomeViewData.textSectionThree}
        btnText={HomeViewData.readmore}
        btnLink=""
      />
      <div className="line-divider-home" />
      <DefaultSectionOneDesktop
        img={homeImg4}
        title={HomeViewData.titleSectionFour}
        text={HomeViewData.textSectionFour}
        btnText={HomeViewData.showOnMap}
        btnLink=""
      />
    </div>
  )
}
