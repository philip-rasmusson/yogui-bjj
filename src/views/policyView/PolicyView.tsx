import { PolicyViewDesktop } from "./policyViewDesktop/PolicyViewDesktop"
import { PolicyViewMobile } from "./policyViewMobile/PolicyViewMobile"
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const PolicyView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <PolicyViewMobile /> : <PolicyViewDesktop />
  }

  return <>{toggleDesktopOrMobileViewForNavbar()}</>
}
