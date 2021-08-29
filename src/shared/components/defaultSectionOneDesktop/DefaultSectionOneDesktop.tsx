import './DefaultSectionOneDesktop.css'

export const DefaultSectionOneDesktop = (props: { img: any, title: string, text: string, btnText: string, btnLink: string }) => {
  return (
    <div className='default-section-one-desktop-wrapper font-black'>
      <h2>{props.title}</h2>
      <div className="default-section-one-desktop-img-wrapper">
        <img src={props.img} alt={props.title} className="box-shadow" />
      </div>
      <p>{props.text}</p>
      <button className="bg-color-black font-white box-shadow">{props.btnText}</button>
    </div>
  )
}
