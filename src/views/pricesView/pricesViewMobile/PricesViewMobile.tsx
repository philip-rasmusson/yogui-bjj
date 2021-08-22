import { DefaultHeaderMobile } from '../../../shared/components/defaultHeader/defaultHeaderMobile/DefaultHeaderMobile'
import './PricesViewMobile.css'
import PricesViewData from '../data/PricesViewData'
import { PricesView } from '../PricesView'

export const PricesViewMobile = () => {

  const pricesWrapper = (priceTitle: string, price1: string, price1info: string, price2?: string, price2info?: string, priceSubTitle?: string) => {
    return (
      <div className="prices-view-mobile-prices-wrapper">
        <h3>{priceTitle}<span>{priceSubTitle}</span></h3>
        <div>
          <p className="col-1 row-1">{price1}</p>
          <p className="col-2 row-1">{price1info}</p>
          <p className="col-1 row-2">{price2}</p>
          <p className="col-2 row-2">{price2info}</p>
        </div>
      </div>

    )
  }

  return (
    <div className="prices-view-mobile-wrapper">
      <DefaultHeaderMobile title={PricesViewData.title} bgImg={PricesViewData.bgImg} />
      {/* BBJ KIDS */}
      {pricesWrapper(PricesViewData.pricesTitle1, PricesViewData.pricesKids1, PricesViewData.pricesKids1info, PricesViewData.pricesKids2, PricesViewData.pricesKids2info, PricesViewData.pricesSubTitle1)}
      {/* BJJ YOUTH */}
      {pricesWrapper(PricesViewData.pricesTitle1, PricesViewData.pricesKids1, PricesViewData.pricesKids1info)}

    </div>
  )
}
