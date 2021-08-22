import './DefaultHeaderMobile.css'

export const DefaultHeaderMobile = (props: { title: string, bgImg: string }) => {

  const cName = `default-header-mobile-wrapper default-header-mobile-${props.bgImg}`

  return (
    <div className={cName}>
      <h2 className="default-header-mobile-title box-shadow">{props.title}</h2>
      <div className="white-overlay" />
    </div>
  )
}
