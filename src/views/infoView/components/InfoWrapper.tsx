
export const InfoWrapper = (props: { title?: string, text?: string }) => {
  return (
    <div className="info-view-info-wrapper">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>

  )
}