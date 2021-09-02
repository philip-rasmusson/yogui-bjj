import './DesktopNavigation.css'
import '../../../shared/global/css/Global.css'
import logo from '../../../shared/img/logo_small.png'
import GlobalData from '../../../data/GlobalData'
import { useHistory } from 'react-router-dom'
import { menuItemsData } from '../data/menu-items-data'
import RoutingPath from '../../../routes/RoutingPath'

import { useState } from "react"
import { MenuItems } from "../MenuItems"

export const DesktopNavigation = () => {
  const history = useHistory()

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
          <MenuItems menuItem={menuItemsData.menuItem2} onclick={() => history.push(RoutingPath.scheduleView)} />
          {/* <MenuItems menuItem={menuItemsData.menuItem3} onclick={() => history.push(RoutingPath.pricesView)} /> */}
          <MenuItems menuItem={menuItemsData.menuItem4} onclick={() => history.push(RoutingPath.techniquesView)} />
          <MenuItems menuItem={menuItemsData.menuItem5} onclick={() => history.push(RoutingPath.infoView)} />
          <MenuItems menuItem={menuItemsData.menuItem6} onclick={() => history.push(RoutingPath.instructorsView)} />
          {/* <MenuItems menuItem={menuItemsData.menuItem6} onclick={() => linkFunction(RoutingPath.contactView)} /> */}
        </ul>
      </div>
    </>
  )
}
