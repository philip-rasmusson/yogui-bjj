import { DefaultViewDesktop } from "./defaultViewDesktop/DefaultViewDesktop"
import { DefaultViewMobile } from "./defaultViewMobile/DefaultViewMobile"
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const SecondView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <DefaultViewMobile /> : <DefaultViewMobile />
  }

  return <div>{toggleDesktopOrMobileViewForNavbar()}</div>
}
