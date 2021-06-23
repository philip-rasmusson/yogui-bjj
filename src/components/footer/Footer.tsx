import './Footer.css'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {

    return (
        <div className="footer">
            <div className="icons">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p className='all-rights'>All Rights Reserved 2021</p>
        </div>
    )
}
export default Footer