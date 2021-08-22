import { DefaultHeaderMobile } from '../../../shared/components/defaultHeader/defaultHeaderMobile/DefaultHeaderMobile'
import './PricesViewMobile.css'
import PricesViewData from '../data/PricesViewData'
import { PricesWrapper } from '../components/PricesWrapper'

export const PricesViewMobile = () => {

  return (
    <div className="prices-view-mobile-wrapper">
      <DefaultHeaderMobile title={PricesViewData.title} bgImg={PricesViewData.bgImg} />

      {/* BBJ KIDS */}
      <PricesWrapper
        title={PricesViewData.pricesTitleKids}
        subTitle={PricesViewData.pricesSubTitleKids}
        price1={PricesViewData.pricesKids1}
        price1info={PricesViewData.pricesKids1info}
        price2={PricesViewData.pricesKids2}
        price2info={PricesViewData.pricesKids2info}
      />

      {/* BJJ YOUTH */}
      <PricesWrapper
        title={PricesViewData.pricesTitleYouth}
        price1={PricesViewData.pricesYouth1}
        price1info={PricesViewData.pricesYouth1info}
      />

      {/* BJJ adult */}
      <PricesWrapper
        title={PricesViewData.pricesTitleBJJ}
        price1={PricesViewData.pricesBJJ1}
      />

      {/* BJJ+SW adult */}
      <PricesWrapper
        title={PricesViewData.pricesTitleBJJandSW}
        price1={PricesViewData.pricesBJJandSW1}
      />

      {/* SW adult */}
      <PricesWrapper
        title={PricesViewData.pricesTitleSW}
        price1={PricesViewData.pricesSW1}
      />

    </div>
  )
}
