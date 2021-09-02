import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"
import { InstructorsViewDesktop } from './instructorsViewDesktop/InstructorsViewDesktop'
import { InstructorsViewMobile } from './instructorsViewMobile/InstructorsViewMobile'


export const InstructorsView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <InstructorsViewMobile /> : <InstructorsViewDesktop />
  }

  return <>{toggleDesktopOrMobileViewForNavbar()}</>
}
