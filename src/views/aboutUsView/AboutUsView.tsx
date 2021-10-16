import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"
import { AboutUsViewDesktop } from './aboutUsViewDesktop/AboutUsViewDesktop'
import { AboutUsViewMobile } from './aboutUsViewMobile/AboutUsViewMobile'

export const AboutUsView = () => {
    const { width } = useWindowDimensions()

    const toggleDesktopOrMobileViewForNavbar = () => {
      return width <= DesktopMobileBreakpoint ? <AboutUsViewMobile /> : <AboutUsViewDesktop />
    }
  
    return <>{toggleDesktopOrMobileViewForNavbar()}</>
}
