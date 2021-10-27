// import { DefaultHeaderMobile } from '../../../shared/components/defaultHeader/defaultHeaderMobile/DefaultHeaderMobile'
import './PolicyViewMobile.css'
import PolicyViewData from '../data/PolicyViewData'
import { ImgContainer } from '../../../shared/components/imgContainer/ImgContainer'
import headerImg from '../../../shared/img/IMG_5150.jpg'
import { AccordionOuter } from '../../../shared/components/AccordionOuter'

export const PolicyViewMobile = () => {

  
  return (
    <div className="policy-view-mobile-wrapper">
      <ImgContainer 
      img={headerImg}
      imgAlt="Header"
      />
      <AccordionOuter 
      title={PolicyViewData.titlePolicyRules}
      text={PolicyViewData.textPolicyRules}
      />
      <div className="line-divider-mobile"></div>
      <AccordionOuter 
      title={PolicyViewData.titleValues}
      text={PolicyViewData.textValues}
      />
      <div className="line-divider-mobile"></div>
      <AccordionOuter 
      title={PolicyViewData.titleCompetition}
      text={PolicyViewData.textCompetition}
      />
      <div className="line-divider-mobile"></div>
      <AccordionOuter 
      title={PolicyViewData.titleDrugsAlcohol}
      text={PolicyViewData.textDrugsAlcohol}
      />
      <div className="line-divider-mobile"></div>
      <AccordionOuter 
      title={PolicyViewData.titleMember}
      text={PolicyViewData.textMember}
      />
      <div className="line-divider-mobile"></div>
      <AccordionOuter 
      title={PolicyViewData.titleSocialMedia}
      text={PolicyViewData.textSocialMedia}
      />

    </div>
  )
}
