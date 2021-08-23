import { ScheduleViewDesktop } from "./scheduleViewDesktop/ScheduleViewDesktop"
import { ScheduleViewMobile } from "./scheduleViewMobile/ScheduleViewMobile"
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../data/DesktopMobileBreakpoint"


export const ScheduleView = () => {
  const { width } = useWindowDimensions()

  const toggleDesktopOrMobileViewForNavbar = () => {
    return width <= DesktopMobileBreakpoint ? <ScheduleViewMobile /> : <ScheduleViewMobile />
  }

  return <>{toggleDesktopOrMobileViewForNavbar()}</>
}
