import './DefaultHeaderDesktop.css'

export const DefaultHeaderDesktop = (props: { title?: string, bgImg: string }) => {
  const cName = `default-header-desktop-wrapper default-header-desktop-${props.bgImg}`

  return (
    <div className={cName}>
      <h2 className="default-header-desktop-title box-shadow">{props.title}</h2>
      <div className="white-overlay" />
    </div>
  )
}
