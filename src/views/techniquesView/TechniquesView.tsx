import { TechniquesViewDesktop } from "./techniquesViewDesktop/TechniquesViewDesktop"
import { TechniquesViewMobile } from "./techniquesViewMobile/TechniquesViewMobile"
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const TechniquesView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <TechniquesViewMobile /> : <TechniquesViewMobile />
  }

  return <>{toggleDesktopOrMobileViewForNavbar()}</>
}
