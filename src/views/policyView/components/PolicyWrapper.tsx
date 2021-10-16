
export const PolicyWrapper = (props: {title: string, text: any}) => {

  const textArray = props.text.map((x:string) => <p>{x}</p>)

  return (
    <>
      <div className="policy-view-policy-wrapper">
        <h3>{props.title}</h3>
        {textArray}
      </div>
    </>

  )
}