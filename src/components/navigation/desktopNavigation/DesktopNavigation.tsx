import './DesktopNavigation.css'
import '../../../shared/global/css/Global.css'
import logo from '../../../shared/img/logo_small.png'
import GlobalData from '../../../data/GlobalData'
import { useHistory } from 'react-router-dom'
import { menuItemsData } from '../data/menu-items-data'
import RoutingPath from '../../../routes/RoutingPath'

import { MenuItems } from "../MenuItems"

export const DesktopNavigation = () => {
  const history = useHistory()

  // const linkFunction = (link: string) => {
  //   window.scrollTo(0, 0);
  //   history.push(link)
  // }

  return (
    <>
      <div className="navbar-desktop-wrapper">
        <div className='navbar-desktop-logo'><img src={logo} alt="Yogui BJJ" onClick={() => history.push(RoutingPath.homeView)} /></div>
        <div className='navbar-desktop-logo-kids'><img src={logo} alt="Yogui BJJ" onClick={() => history.push(RoutingPath.homeView)} /></div>
        <div className="navbar-desktop-title-wrapper" onClick={() => history.push(RoutingPath.homeView)}>
          <h1>{GlobalData.title}</h1>
          <div className="line-divider-navbar-desktop" />
          <h2>{GlobalData.subTitleNavbarDesktop}</h2>
        </div>
      </div>
      <div className="navbar-menu-desktop">

        <ul className='font-black'>
          {/* <MenuItems menuItem={menuItemsData.menuItemTechniques} onclick={() => history.push(RoutingPath.techniquesView)} /> */}
          <MenuItems menuItem={menuItemsData.menuItemAboutUs} onclick={() => history.push(RoutingPath.aboutUsView)} />
          <MenuItems menuItem={menuItemsData.menuItemAffiliates} onclick={() => history.push(RoutingPath.affiliatesView)} />
          <MenuItems menuItem={menuItemsData.menuItemPolicy} onclick={() => history.push(RoutingPath.policyView)} />
          <MenuItems menuItem={menuItemsData.menuItemContact} onclick={() => window.scrollTo({ top: 10000, left: 0, behavior: 'smooth' })} />
        </ul>
      </div>
    </>
  )
}
