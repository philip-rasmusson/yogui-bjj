import { AffiliatesViewDesktop } from './affiliatesViewDesktop/AffiliatesViewDesktop'
import { AffiliatesViewMobile } from './affiliatesViewMobile/AffiliatesViewMobile'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"

export const AffiliatesView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <AffiliatesViewMobile
    /> : <AffiliatesViewDesktop />
  }

  return <>{toggleDesktopOrMobileViewForNavbar()}</>
}