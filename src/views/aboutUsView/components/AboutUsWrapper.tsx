
export const AboutUsWrapper = (props: {title: string, text: any}) => {

    const textArray = props.text.map((x:string, i:number) => <p key={i}>{x}</p>)
  
    return (
      <>
        <div className="about-us-view-wrapper">
          <h3>{props.title}</h3>
          {textArray}
        </div>
      </>
  
    )
  }