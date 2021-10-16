import { DefaultHeaderMobile } from '../../../shared/components/defaultHeader/defaultHeaderMobile/DefaultHeaderMobile'
import './PolicyViewMobile.css'
import PolicyViewData from '../data/PolicyViewData'
import { PolicyWrapper } from '../components/PolicyWrapper'

export const PolicyViewMobile = () => {

  return (
    <div className="policy-view-mobile-wrapper">
      <DefaultHeaderMobile title={PolicyViewData.title} bgImg={PolicyViewData.bgImg} />
      <div className="margin-2rem-auto">

      <PolicyWrapper 
      title={PolicyViewData.titlePolicyRules}
      text={PolicyViewData.textPolicyRules}
      />
      <div className="line-divider-mobile"></div>
      <PolicyWrapper 
      title={PolicyViewData.titleValues}
      text={PolicyViewData.textValues}
      />
      <div className="line-divider-mobile"></div>
      <PolicyWrapper 
      title={PolicyViewData.titleCompetition}
      text={PolicyViewData.textCompetition}
      />
      <div className="line-divider-mobile"></div>
      <PolicyWrapper 
      title={PolicyViewData.titleDrugsAlcohol}
      text={PolicyViewData.textDrugsAlcohol}
      />
      <div className="line-divider-mobile"></div>
      <PolicyWrapper 
      title={PolicyViewData.titleMember}
      text={PolicyViewData.textMember}
      />
      <div className="line-divider-mobile"></div>
      <PolicyWrapper 
      title={PolicyViewData.titleSocialMedia}
      text={PolicyViewData.textSocialMedia}
      />

      </div>
    </div>
  )
}
