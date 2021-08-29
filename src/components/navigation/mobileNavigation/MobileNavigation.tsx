import './MobileNavigation.css'
import '../../../shared/global/css/Global.css'
import { useState } from "react"
import { MenuItems } from "../MenuItems"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../../shared/img/logo_small.png'
import GlobalData from '../../../data/GlobalData'
import { useHistory } from 'react-router-dom'
import { menuItemsData } from '../data/menu-items-data'
import RoutingPath from '../../../routes/RoutingPath'


export const MobileNavigation = () => {

  const history = useHistory()
  const [burgerIcon, setBurgerIcon] = useState<any>(faBars)

  const toggleNavbar = () => {
    window.scrollTo(0, 0)
    return burgerIcon === faBars ? { display: 'none' } : { display: 'block' }
  }
  const displayBurgerIcon = () => {
    burgerIcon === faBars ? setBurgerIcon(faTimes) : setBurgerIcon(faBars)
  }
  const linkFunction = (link: string) => {
    history.push(link)
    setBurgerIcon(faBars)
    toggleNavbar()
  }
  return (
    <div>
      <div className='navbar-mobile-wrapper'>
        <div className='navbar-mobile-wrapper-inner font-black'>
          <div className='navbar-mobile-logo' onClick={() => linkFunction(RoutingPath.homeView)}><img src={logo} alt="Yogui BJJ" /></div>
          <div className="navbar-mobile-title-wrapper">
            <h1>{GlobalData.title}</h1>
            <div className="line-divider-navbar" />
            <h2>{GlobalData.subTitle}</h2>
          </div>
          <div className="navbar-icon-wrapper-inactive" onClick={() => displayBurgerIcon()}>
            <FontAwesomeIcon icon={burgerIcon} />
          </div>
          <div className='navbar-mobile-menu-wrapper bg-color-white' style={toggleNavbar()}>
            <div className="navbar-icon-wrapper-active" onClick={() => displayBurgerIcon()}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <ul className='font-black'>
              <MenuItems menuItem={menuItemsData.menuItem2} onclick={() => linkFunction(RoutingPath.scheduleView)} />
              <MenuItems menuItem={menuItemsData.menuItem3} onclick={() => linkFunction(RoutingPath.pricesView)} />
              <MenuItems menuItem={menuItemsData.menuItem4} onclick={() => linkFunction(RoutingPath.techniquesView)} />
              <MenuItems menuItem={menuItemsData.menuItem5} onclick={() => linkFunction(RoutingPath.infoView)} />
              {/* <MenuItems menuItem={menuItemsData.menuItem6} onclick={() => linkFunction(RoutingPath.contactView)} /> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
