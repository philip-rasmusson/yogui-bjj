import './Footer.css'
import Facebook from '../../shared/img/Facebook-Ican.png';
import Instagram from '../../shared/img/InstagramIcan.png';
import Link from '../../shared/img/LinkIcan.jpg';
import Email from '../../shared/img/epostIcan.png';

export const Footer = () => {

    return (

        <div className="footer">
            <section className="footer-info">
                <section className="footer-info-left">
                    <p>Om Oss</p>
                    <p>
                        Människor som i dagsläget tränar mer eller mindre regelbundet,
                        och som vill ha ett tydligare upplägg och bättre koll på resultatet av sin träning.
                    </p>
                </section>
                <section className="footer-info-right">

                    <img className='instagramIcan'
                        src={Instagram} alt={'..error'} />

                    <img className='facebookIcan'
                        src={Facebook} alt={'..error'} />

                    <img className='linkIcan'
                        src={Link} alt={'..error'} />

                    <img className='emailIcan'
                        src={Email} alt={'..error'} />
                </section>
            </section>
        
        </div>
    )
}
export default Footer