import './MobileFooter.css'
import logo from '../../../shared/img/logo_small.png'

export const MobileFooter = () => {
  return (
    <div className="footer-mobile-wrapper bg-color-black">
      <h1></h1>
      <div className="line-divider-footer-mobile" />
      <div className="footer-mobile-contact-wrapper">
        <div className="footer-mobile-contact-icon-adress"></div>
        <div className="footer-mobile-contact-icon-phone"></div>
        <div className="footer-mobile-contact-icon-email"></div>
        <p className="footer-mobile-contact-adress">Hangarvägen 3B, 423 37 Göteborg</p>
        <p className="footer-mobile-contact-phone">0737 - 83 69 26</p>
        <p className="footer-mobile-contact-email">info@torslandakampsportcenter.se</p>
      </div>
      <img src={logo} alt="" />
      <div className="footer-mobile-social-media-wrapper"></div>
      <p className="footer-mobile-copyright">© 2021 YOGUI BJJ ASSOCIATION | ALL RIGHTS RESERVED</p>
    </div>
  )
}
