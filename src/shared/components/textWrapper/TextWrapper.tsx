
export const TextWrapper  = (props: {title: string, text: any}) => {

    const textArray = props.text.map((x:string, i:number) => <p key={i}>{x}</p>)
  
    return (
      <>
        <div className="text-wrapper">
          <h3>{props.title}</h3>
          {textArray}
        </div>
      </>
  
    )
  }