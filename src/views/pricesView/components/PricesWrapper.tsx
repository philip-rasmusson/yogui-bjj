



export const PricesWrapper = (props: { title: string, price1: string, price1info?: string, price2?: string, price2info?: string, subTitle?: string }) => {
  return (
    <div className="prices-view-mobile-prices-wrapper">
      <h3>{props.title}<span>{props?.subTitle}</span></h3>
      <div>
        <p className="col-1 row-1">{props.price1}</p>
        <p className="col-2 row-1">{props.price1info}</p>
        <p className="col-1 row-2">{props.price2}</p>
        <p className="col-2 row-2">{props.price2info}</p>
      </div>
    </div>

  )
}