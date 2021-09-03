
export const PolicyWrapper = (props: { title?: string, text?: string }) => {
  return (
    <div className="policy-view-policy-wrapper">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>

  )
}