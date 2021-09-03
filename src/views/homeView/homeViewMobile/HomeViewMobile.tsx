import './HomeViewMobile.css'
import HomeViewData from '../data/HomeViewData'
import { DefaultSectionOneMobile } from '../../../shared/components/defaultSectionOneMobile/DefaultSectionOneMobile'
import homeImg1 from '../../../shared/img/homeImgs/homeImg1.png'
import homeImg2 from '../../../shared/img/homeImgs/homeImg2.png'
import homeImg3 from '../../../shared/img/homeImgs/homeImg3.png'
import homeImg4 from '../../../shared/img/homeImgs/homeImg4.png'
import homeImg5 from '../../../shared/img/homeImgs/homeImg5.jpg'


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
        text={HomeViewData.textSectionOne}
        btnText={HomeViewData.readmore}
        btnLink=""
      />
      <div className="line-divider-home" />
      <DefaultSectionOneMobile
        img={homeImg5}
        title={HomeViewData.titleSectionTwo}
        text={HomeViewData.textSectionTwo}
        btnText={HomeViewData.readmore}
        btnLink=""
      />
      <div className="line-divider-home" />
      <DefaultSectionOneMobile
        img={homeImg2}
        title={HomeViewData.titleSectionThree}
        text={HomeViewData.textSectionThree}
        btnText={HomeViewData.readmore}
        btnLink=""
      />
      <div className="line-divider-home" />
      <DefaultSectionOneMobile
        img={homeImg4}
        title={HomeViewData.titleSectionFour}
        text={HomeViewData.textSectionFour}
        btnText={HomeViewData.showOnMap}
        btnLink=""
      />
    </div>
  )
}
