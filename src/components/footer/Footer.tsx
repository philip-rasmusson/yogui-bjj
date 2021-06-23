import './Footer.css'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {

    return (

        <div className="footer">
            {/* <section className="omOss">
                <h2>OM OSS</h2>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nulla lobortis, posuere augue non, volutpat ex. Phasellus ac dui in orci tempus dignissim. Fusce et venenatis diam, at venenatis enim. Sed lorem justo, feugiat at erat id, imperdiet aliquam nisl. Phasellus placerat vel ipsum feugiat mollis.
                </p>
            </section> */}
            <div className="icons">

                <FontAwesomeIcon icon={faInstagram} />


                <FontAwesomeIcon icon={faFacebook} />


                <FontAwesomeIcon icon={faLinkedin} />


                <FontAwesomeIcon icon={faEnvelope} />

            </div>

        </div>
    )
}
export default Footer