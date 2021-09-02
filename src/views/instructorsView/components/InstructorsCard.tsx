
export const InstructorsCard = (props: { name: string, img: any, imgAlt?: string, info?: string }) => {
  return (
    <div className="instructors-card-wrapper">
      <h2>{props.name}</h2>
      <p>{props.info}</p>
      <img src={props.img} alt={props.imgAlt} />
    </div>
  )
}
