
import GlobalData from "../../data/GlobalData"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '../../../node_modules/@fortawesome/free-brands-svg-icons'


export const SocialMediaIcons = () => {
  return (
    <>
      <a href={GlobalData.facebookLink} target="blank"><FontAwesomeIcon icon={faFacebook} className="links" /></a>
      <a href={GlobalData.instagramLink} target="blank"><FontAwesomeIcon icon={faInstagram} className="links" /></a>
      <a href={GlobalData.whatsUpLink} target="blank"><FontAwesomeIcon icon={faWhatsapp} className="links" /></a>
    </>
  )
}