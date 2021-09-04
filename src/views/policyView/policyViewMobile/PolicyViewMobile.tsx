import { DefaultHeaderMobile } from '../../../shared/components/defaultHeader/defaultHeaderMobile/DefaultHeaderMobile'
import './PolicyViewMobile.css'
import PolicyViewData from '../data/PolicyViewData'
import { PolicyWrapper } from '../components/PolicyWrapper'

export const PolicyViewMobile = () => {

  return (
    <div className="policy-view-mobile-wrapper">
      <DefaultHeaderMobile title={PolicyViewData.title} bgImg={PolicyViewData.bgImg} />
      <div className="margin-2rem-auto">

        <PolicyWrapper />

      </div>
    </div>
  )
}
