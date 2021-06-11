import { DesktopNavbar } from "./desktopNavigation/DesktopNavbar"
import { MobileNavbar } from "./mobileNavigation/MobileNavbar"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"


export const Navbar = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint.width ? <MobileNavbar /> : <MobileNavbar />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
