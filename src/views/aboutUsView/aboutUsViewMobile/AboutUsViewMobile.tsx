import './AboutUsViewMobile.css'
import AboutUsData from '../data/AboutUsData'
import { TextWrapper } from '../../../shared/components/textWrapper/TextWrapper'
import { ImgContainer } from '../../../shared/components/imgContainer/ImgContainer'
import marcelo from '../../../shared/img/instructors/marcelo-sq.jpg'
// import bjj from '../../../shared/img/about-us-bjj.jpg'

export const AboutUsViewMobile = () => {
    return (
        <div className="about-us-view-mobile-wrapper">
            <div className="margin-5vw-auto"></div>
        <ImgContainer 
        img={marcelo}
        imgAlt="Marcelo Yogui"
        />
        <TextWrapper 
        title={AboutUsData.aboutUsTitle}
        text={AboutUsData.aboutUsText}
        />
        <div className="line-divider-mobile"></div>
            {/* <div className="margin-5vw-auto"></div>
        <ImgContainer 
        img={bjj}
        imgAlt="Brazilian jiu-jitsu"
        /> */}
        <TextWrapper 
        title={AboutUsData.aboutBJJTitle}
        text={AboutUsData.aboutBJJText}
        />
        <div className="line-divider-mobile"></div>
        <TextWrapper 
        title={AboutUsData.aboutSWTitle}
        text={AboutUsData.aboutSWText}
        />
    </div>
    )
}
