import './MobileFooter.css'
import logo from '../../../shared/img/logo_footer.png'
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GlobalData from '../../../data/GlobalData'
import { SocialMediaIcons } from '../../socailMediaIcons/SocailMediaIcons'
import { SelectLanguage } from '../../../functions/SelectLanguage'

export const MobileFooter = () => {
  return (
    <div className="footer-mobile-wrapper bg-color-black font-white">
      <h1>{GlobalData.titleFooter}</h1>
      <div className="line-divider-footer-mobile bg-color-yogui" />
      <div className="footer-mobile-contact-wrapper">
        <div className="footer-mobile-contact-icon-adress"><FontAwesomeIcon icon={faMapMarker} /></div>
        <div className="footer-mobile-contact-icon-phone"><FontAwesomeIcon icon={faPhone} /></div>
        <div className="footer-mobile-contact-icon-email"><FontAwesomeIcon icon={faEnvelope} /></div>
        <p className="footer-mobile-contact-adress">
          <SelectLanguage
            textSwe={GlobalData.adress}
            textEng={GlobalData.adress}
          />
        </p>
        <p className="footer-mobile-contact-phone"><SelectLanguage
          textSwe={GlobalData.phone}
          textEng={GlobalData.phone}
        /></p>
        <p className="footer-mobile-contact-email"><SelectLanguage
          textSwe={GlobalData.email}
          textEng={GlobalData.email}
        /></p>
      </div>
      <div className="footer-mobile-social-media-icons-wrapper"><SocialMediaIcons /></div>
      <img src={logo} alt="" />
      <div className="footer-mobile-social-media-wrapper"></div>
      <p className="footer-mobile-copyright font-light-grey">{GlobalData.copyright}</p>
    </div>
  )
}
