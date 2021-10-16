import './AboutUsViewDesktop.css'
import { AboutUsWrapper } from '../components/AboutUsWrapper'
import AboutUsData from '../data/AboutUsData'

export const AboutUsViewDesktop = () => {
    return (
        <div className="about-us-view-desktop-wrapper">
            <AboutUsWrapper 
            title={AboutUsData.aboutUsTitle}
            text={AboutUsData.aboutUsText}
            />
            <AboutUsWrapper 
            title={AboutUsData.aboutBJJTitle}
            text={AboutUsData.aboutBJJText}
            />
            <AboutUsWrapper 
            title={AboutUsData.aboutSWTitle}
            text={AboutUsData.aboutSWText}
            />
        </div>
    )
}
