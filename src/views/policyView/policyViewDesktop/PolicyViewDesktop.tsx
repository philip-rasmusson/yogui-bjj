import './PolicyViewDesktop.css'
import PolicyViewData from '../data/PolicyViewData'
import { TextWrapper } from '../../../shared/components/textWrapper/TextWrapper'
import { ImgContainer } from '../../../shared/components/imgContainer/ImgContainer'
import policy from '../../../shared/img/policy-header.jpg'

export const PolicyViewDesktop = () => {
  return (
    <div className="policy-view-desktop-wrapper">
      <TextWrapper 
      title={PolicyViewData.titlePolicyRules}
      text={PolicyViewData.textPolicyRules}
      />
      <div className="line-divider-desktop"></div>
      <ImgContainer
      img={policy}
      imgAlt="Policy"
      />
      <div className="line-divider-desktop"></div>
      <TextWrapper 
      title={PolicyViewData.titleValues}
      text={PolicyViewData.textValues}
      />
      <div className="line-divider-desktop"></div>
      <TextWrapper 
      title={PolicyViewData.titleCompetition}
      text={PolicyViewData.textCompetition}
      />
      <div className="line-divider-desktop"></div>
      <TextWrapper 
      title={PolicyViewData.titleDrugsAlcohol}
      text={PolicyViewData.textDrugsAlcohol}
      />
      <div className="line-divider-desktop"></div>
      <TextWrapper 
      title={PolicyViewData.titleMember}
      text={PolicyViewData.textMember}
      />
      <div className="line-divider-desktop"></div>
      <TextWrapper 
      title={PolicyViewData.titleSocialMedia}
      text={PolicyViewData.textSocialMedia}
      />
    </div>
  )
}
