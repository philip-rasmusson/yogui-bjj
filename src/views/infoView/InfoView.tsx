import { InfoViewDesktop } from "./infoViewDesktop/InfoViewDesktop"
import { InfoViewMobile } from "./infoViewMobile/InfoViewMobile"
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const InfoView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <InfoViewMobile /> : <InfoViewDesktop />
  }

  return <>{toggleDesktopOrMobileViewForNavbar()}</>
}
