// import { DefaultHeaderMobile } from '../../../shared/components/defaultHeader/defaultHeaderMobile/DefaultHeaderMobile'
import './PolicyViewMobile.css'
import PolicyViewData from '../data/PolicyViewData'
import { TextWrapper } from '../../../shared/components/textWrapper/TextWrapper'
import { ImgContainer } from '../../../shared/components/imgContainer/ImgContainer'
import headerImg from '../../../shared/img/IMG_5150.jpg'

export const PolicyViewMobile = () => {
  
  return (
    <div className="policy-view-mobile-wrapper">
      <ImgContainer 
      img={headerImg}
      imgAlt="Header"
      />
      <TextWrapper 
      title={PolicyViewData.titlePolicyRules}
      text={PolicyViewData.textPolicyRules}
      />
      <div className="line-divider-mobile"></div>
      <TextWrapper 
      title={PolicyViewData.titleValues}
      text={PolicyViewData.textValues}
      />
      <div className="line-divider-mobile"></div>
      <TextWrapper 
      title={PolicyViewData.titleCompetition}
      text={PolicyViewData.textCompetition}
      />
      <div className="line-divider-mobile"></div>
      <TextWrapper 
      title={PolicyViewData.titleDrugsAlcohol}
      text={PolicyViewData.textDrugsAlcohol}
      />
      <div className="line-divider-mobile"></div>
      <TextWrapper 
      title={PolicyViewData.titleMember}
      text={PolicyViewData.textMember}
      />
      <div className="line-divider-mobile"></div>
      <TextWrapper 
      title={PolicyViewData.titleSocialMedia}
      text={PolicyViewData.textSocialMedia}
      />

    </div>
  )
}
