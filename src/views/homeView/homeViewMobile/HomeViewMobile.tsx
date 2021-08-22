import './HomeViewMobile.css'
import HomeViewData from '../data/HomeViewData'
import HeaderImg from '../../../shared/img/HeaderImg.jpg'
import { Header } from 'antd/lib/layout/layout'

export const HomeViewMobile = () => {
  return (
    <div className="home-mobile-wrapper">
      <div className="home-mobile-header-wrapper">
        {/* <img src={HeaderImg} alt="Header image" /> */}
        <h2 className="home-mobile-title font-white text-shadow">{HomeViewData.title}</h2>
        <button className="side-button-left-mobile font-white bg-color-black">{HomeViewData.btnText}</button>
        <div className="white-overlay" />
      </div>
    </div>
  )
}
