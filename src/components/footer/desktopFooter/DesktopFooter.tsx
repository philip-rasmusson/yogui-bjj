import './DesktopFooter.css'
import logo from '../../../shared/img/logo_footer.png'
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GlobalData from '../../../data/GlobalData'
import { SocialMediaIcons } from '../../socailMediaIcons/SocailMediaIcons'
export const DesktopFooter = () => {
  return (
    <div className="footer-desktop-wrapper font-white">
      <h1>{GlobalData.titleFooter}</h1>
      <div className="line-divider-footer-desktop bg-color-yogui" />
      <div className="footer-desktop-contact-wrapper">
        <div className="footer-desktop-contact-icon-adress"><FontAwesomeIcon icon={faMapMarker} /></div>
        <div className="footer-desktop-contact-icon-phone"><FontAwesomeIcon icon={faPhone} /></div>
        <div className="footer-desktop-contact-icon-email"><FontAwesomeIcon icon={faEnvelope} /></div>
        <p className="footer-desktop-contact-adress">{GlobalData.adress}</p>
        <p className="footer-desktop-contact-phone">{GlobalData.phone}</p>
        <p className="footer-desktop-contact-email">{GlobalData.email}</p>
      </div>
      <div className="footer-desktop-social-media-icons-wrapper"><SocialMediaIcons /></div>
      <img src={logo} alt="" />
      <div className="footer-desktop-social-media-wrapper"></div>
      <p className="footer-desktop-copyright font-light-grey">{GlobalData.copyright}</p>
    </div>
  )
}
