import { DesktopFooter } from './desktopFooter/DesktopFooter'
import { MobileFooter } from "./mobileFooter/MobileFooter"

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from '../../data/DesktopMobileBreakpoint'


export const Footer = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForFooter = () => {
    return width <= DesktopMobileBreakpoint ? <MobileFooter /> : <DesktopFooter />
  }

  return <>{toggleDesktopOrMobileViewForFooter()}</>
}
