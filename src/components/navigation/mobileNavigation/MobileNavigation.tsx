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
  // const [menuItemTechniques, setMenuItemTechniques] = useState(menuItemsData.menuItemTechniques)
  const [menuItemPolicy] = useState(menuItemsData.menuItemPolicy)
  const [menuItemAffiliates] = useState(menuItemsData.menuItemAffiliates)
  const [menuItemAboutUs] = useState(menuItemsData.menuItemAboutUs)

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
            <div className="line-divider-navbar" />
            <h1>{GlobalData.title}</h1>
            <h2>{GlobalData.subTitle}</h2>
            <div className="line-divider-navbar" />
          </div>
          <div className="navbar-icon-wrapper-inactive" onClick={() => displayBurgerIcon()}>
            <FontAwesomeIcon icon={burgerIcon} />
          </div>
          <div className='navbar-mobile-menu-wrapper bg-color-white' style={toggleNavbar()}>
            <div className="navbar-icon-wrapper-active" onClick={() => displayBurgerIcon()}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <ul className='font-black'>
              {/* <MenuItems menuItem={menuItemTechniques} onclick={() => linkFunction(RoutingPath.techniquesView)} /> */}
              <MenuItems menuItem={menuItemAboutUs} onclick={() => linkFunction(RoutingPath.aboutUsView)} />
              <MenuItems menuItem={menuItemPolicy} onclick={() => linkFunction(RoutingPath.policyView)} />
              <MenuItems menuItem={menuItemAffiliates} onclick={() => linkFunction(RoutingPath.affiliatesView)} />
              {/* <MenuItems menuItem={menuItemsData.menuItemContact} onclick={() => scrollToBottom()} /> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
