



export const ScheduleWrapper = (props: { title?: string, time1?: string, group1?: string, time2?: string, group2?: string, time3?: string, group3?: string, time4?: string, group4?: string, }) => {
  return (
    <div className="schedule-view-schedule-wrapper">
      <h3>{props.title}</h3>
      <div>
        <p className="col-1 row-1">{props.time1}</p>
        <p className="col-2 row-1">{props.group1}</p>
        <p className="col-1 row-2">{props.time2}</p>
        <p className="col-2 row-2">{props.group2}</p>
        <p className="col-1 row-3">{props.time3}</p>
        <p className="col-2 row-4">{props.group3}</p>
        <p className="col-1 row-4">{props.time4}</p>
        <p className="col-2 row-5">{props.group4}</p>
      </div>
    </div>

  )
}