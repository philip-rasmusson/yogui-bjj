import { PricesViewDesktop } from "./pricesViewDesktop/PricesViewDesktop"
import { PricesViewMobile } from "./pricesViewMobile/PricesViewMobile"
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const PricesView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <PricesViewMobile /> : <PricesViewDesktop />
  }

  return <>{toggleDesktopOrMobileViewForNavbar()}</>
}
