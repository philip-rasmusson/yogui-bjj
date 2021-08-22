import './MobileNavigation.css'
import '../../../shared/global/css/Global.css'
import { useState } from "react"
import { MenuItems } from "../MenuItems"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../../shared/img/logo_small.png'
import GlobalData from '../../../data/GlobalData'

export const MobileNavigation = () => {

  const [burgerIcon, setBurgerIcon] = useState<any>(faBars)


  const toggleShowMenu = () => {
    return burgerIcon === faBars ? { display: 'none' } : { display: 'block' }
  }

  const displayBurgerIcon = () => {
    burgerIcon === faBars ? setBurgerIcon(faTimes) : setBurgerIcon(faBars)
  }
  const fixedNavIcon = () => {
    return burgerIcon === faBars ? 'navbar-icon-wrapper-inactive' : 'navbar-icon-wrapper-active'
  }

  return (
    <div>
      <div className='navbar-mobile-wrapper'>
        <div className='navbar-mobile-wrapper-inner font-black'>
          <div className='navbar-mobile-logo'><img src={logo} alt="Yogui BJJ" /></div>
          <div className="navbar-mobile-title-wrapper">
            <h1>{GlobalData.title}</h1>
            <div className="line-divider-navbar" />
            <h2>{GlobalData.subTitle}</h2>
          </div>
          <div className={fixedNavIcon()} onClick={() => displayBurgerIcon()}>
            <FontAwesomeIcon icon={burgerIcon} />
          </div>
          <div className='navbar-mobile-menu-wrapper bg-color-white' style={toggleShowMenu()}>
            {MenuItems()}
          </div>
        </div>
      </div>
    </div>
  )
}
