import { DefaultHeaderMobile } from '../../../shared/components/defaultHeader/defaultHeaderMobile/DefaultHeaderMobile'
import './ScheduleViewMobile.css'
import ScheduleViewData from '../data/ScheduleViewData'
import { ScheduleWrapper } from '../components/ScheduleWrapper'

export const ScheduleViewMobile = () => {

  return (
    <div className="schedule-view-mobile-wrapper">
      <DefaultHeaderMobile title={ScheduleViewData.title} bgImg={ScheduleViewData.bgImg} />
      <div className="margin-2rem-auto">

        {/* MONDAY */}
        <ScheduleWrapper
          title={ScheduleViewData.scheduleMonday}
          time1={ScheduleViewData.scheduleTimes1}
          group1={ScheduleViewData.scheduleKids1}
          time2={ScheduleViewData.scheduleTimes2}
          group2={ScheduleViewData.scheduleKids2}
          time3={ScheduleViewData.scheduleTimes3}
          group3={ScheduleViewData.scheduleAdultBJJ}
        />

        {/* TUESDAY */}
        <ScheduleWrapper
          title={ScheduleViewData.scheduleTuesday}
          time1={ScheduleViewData.scheduleTimes1}
          group1={ScheduleViewData.scheduleKids1}
          time2={ScheduleViewData.scheduleTimes2}
          group2={ScheduleViewData.scheduleKids2}
          time3={ScheduleViewData.scheduleTimes4}
          group3={ScheduleViewData.scheduleYouth}
          time4={ScheduleViewData.scheduleTimes5}
          group4={ScheduleViewData.scheduleAdultSW}
        />

        {/* WEDNSDAY */}
        <ScheduleWrapper
          title={ScheduleViewData.scheduleWednsday}
          time1={ScheduleViewData.scheduleTimes1}
          group1={ScheduleViewData.scheduleKids1}
          time2={ScheduleViewData.scheduleTimes2}
          group2={ScheduleViewData.scheduleKids2}
          time3={ScheduleViewData.scheduleTimes3}
          group3={ScheduleViewData.scheduleAdultBJJ}
        />

        {/* THURSDAY */}
        <ScheduleWrapper
          title={ScheduleViewData.scheduleThursday}
          time1={ScheduleViewData.scheduleTimes1}
          group1={ScheduleViewData.scheduleKids1}
          time2={ScheduleViewData.scheduleTimes2}
          group2={ScheduleViewData.scheduleKids2}
          time3={ScheduleViewData.scheduleTimes4}
          group3={ScheduleViewData.scheduleYouth}
          time4={ScheduleViewData.scheduleTimes5}
          group4={ScheduleViewData.scheduleAdultSW}
        />

        {/* FRIDAY */}
        <ScheduleWrapper
          title={ScheduleViewData.scheduleFriday}
          time1={ScheduleViewData.scheduleTimes6}
          group1={ScheduleViewData.scheduleBJJsparring}
        />
      </div>

    </div>
  )
}
