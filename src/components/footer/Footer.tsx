import './Footer.css'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {

    return (

        <div className="footer">
            <section className="omOss">
                <h2>Om Oss</h2>
                <br />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book.
                    </p>
            </section>
            <section className="icons">
                <span>
                    <FontAwesomeIcon icon={faInstagram} />
                </span>
                <span>
                    <FontAwesomeIcon icon={faFacebook} />
                </span>
                <br />
                <span>
                    <FontAwesomeIcon icon={faLinkedin} />
                </span>
                <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
            </section>

        </div>
    )
}
export default Footer