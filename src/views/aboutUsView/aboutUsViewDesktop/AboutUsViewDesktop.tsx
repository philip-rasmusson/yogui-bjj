import './AboutUsViewDesktop.css'
import AboutUsData from '../data/AboutUsData'
import { TextWrapper } from '../../../shared/components/textWrapper/TextWrapper'
import { ImgContainer } from '../../../shared/components/imgContainer/ImgContainer'
import marcelo from '../../../shared/img/marcelo-wide.jpg'


export const AboutUsViewDesktop = () => {
    return (
        <div className="about-us-view-desktop-wrapper">
            <TextWrapper 
            title={AboutUsData.aboutUsTitle}
            text={AboutUsData.aboutUsText}
            />
            <div className="margin-4rem-auto">

            <ImgContainer
            img={marcelo}
            imgAlt="Marcelo Yogui"
            />
            </div>
            {/* <div className="line-divider-desktop"></div> */}
            <TextWrapper 
            title={AboutUsData.aboutBJJTitle}
            text={AboutUsData.aboutBJJText}
            />
            <div className="line-divider-desktop"></div>
            <TextWrapper 
            title={AboutUsData.aboutSWTitle}
            text={AboutUsData.aboutSWText}
            />
        </div>
    )
}
