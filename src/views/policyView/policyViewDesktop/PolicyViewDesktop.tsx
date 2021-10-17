import { PolicyWrapper } from '../components/PolicyWrapper'
import './PolicyViewDesktop.css'
import PolicyViewData from '../data/PolicyViewData'

export const PolicyViewDesktop = () => {
  return (
    <div className="policy-view-desktop-wrapper">
      <PolicyWrapper 
      title={PolicyViewData.titlePolicyRules}
      text={PolicyViewData.textPolicyRules}
      />
      <div className="line-divider-desktop"></div>
      <PolicyWrapper 
      title={PolicyViewData.titleValues}
      text={PolicyViewData.textValues}
      />
      <div className="line-divider-desktop"></div>
      <PolicyWrapper 
      title={PolicyViewData.titleCompetition}
      text={PolicyViewData.textCompetition}
      />
      <div className="line-divider-desktop"></div>
      <PolicyWrapper 
      title={PolicyViewData.titleDrugsAlcohol}
      text={PolicyViewData.textDrugsAlcohol}
      />
      <div className="line-divider-desktop"></div>
      <PolicyWrapper 
      title={PolicyViewData.titleMember}
      text={PolicyViewData.textMember}
      />
      <div className="line-divider-desktop"></div>
      <PolicyWrapper 
      title={PolicyViewData.titleSocialMedia}
      text={PolicyViewData.textSocialMedia}
      />
    </div>
  )
}
