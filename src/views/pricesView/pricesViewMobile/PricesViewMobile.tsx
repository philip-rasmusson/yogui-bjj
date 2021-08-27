import { DefaultHeaderMobile } from '../../../shared/components/defaultHeader/defaultHeaderMobile/DefaultHeaderMobile'
import './PricesViewMobile.css'
import PricesViewData from '../data/PricesViewData'
import FormData from '../data/FormData'
import { PricesWrapper } from '../components/PricesWrapper'
import swishLogo from '../../../shared/img/swishLogo.png'

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

      <div className="line-divider-mobile"></div>

      <div className="prices-view-prices-wrapper">
        <h3>{PricesViewData.pricesPayment}</h3>
        <p>{PricesViewData.pricesPaymentInfo}</p>
        <div className="margin-15vw-auto">
          <img src={swishLogo} alt="" className="prices-view-mobile-swish-logo col-1 row-1" />
          <h4 className="col-2 row-1">{PricesViewData.swishNumber}</h4>
        </div>
      </div>

      <form action="">
        <label htmlFor="">{FormData.name}<input name="name" type="text" placeholder={FormData.placeholderName}></input></label>

        <label htmlFor="">{FormData.personNumber}<input required name="personNumber" type="text" placeholder={FormData.placeholderPersonNumber}></input></label>

        <label htmlFor="">{FormData.phone}<input required name="phone" type="text" placeholder={FormData.placeholderPhone}></input></label>

        <label htmlFor="">{FormData.email}<input required name="email" type="text" placeholder={FormData.placeholderEmail}></input></label>

        <label htmlFor="">{FormData.adress}<input required name="adress" type="text" placeholder={FormData.placeholderAdress}></input></label>

        <label htmlFor="">{FormData.zipCode}<input required name="zipCode" type="text" placeholder={FormData.placeholderZipCode}></input></label>

        <label htmlFor="">{FormData.city}<input required name="city" type="text" placeholder={FormData.placeholderCity}></input></label>

        <div className="margin-10vw-auto"></div>

        <p>barn under 18 år</p>

        <label htmlFor="">{FormData.parent}<input name="parent" type="text" placeholder={FormData.placeholderName} className=""></input></label>

        <label htmlFor="">{FormData.parentPhone}<input name="parentPhone" type="text" placeholder={FormData.placeholderPhone}></input></label>
        <div className="margin-10vw-auto"></div>
        <div></div>
        <button type="submit">SKICKA</button>
        <button type="reset">RENSA</button>
      </form>


    </div>
  )
}
